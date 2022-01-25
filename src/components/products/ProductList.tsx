import React, { useEffect, useState } from "react"
import Amplify, { API, graphqlOperation } from "aws-amplify"
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Form, Popconfirm, Table, Typography,
} from "antd"
import { EditOutlined } from "@ant-design/icons"
import { ColumnType } from "antd/lib/table"
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLResult } from "@aws-amplify/api"
import awsExports from "../../aws-exports.js"
import "./ProductList.css"
import "antd/dist/antd.css"
import EditableCell from "./EditableCell"
import { listProductWarehouses } from "../../graphql/queries"
import InsertProduct from "./InsertProduct"
import { ListProductWarehousesQuery, ProductWarehouse } from "../../API"
import { updateProduct } from "../../graphql/mutations"

Amplify.configure(awsExports)

export type ProductTable = {
  code: string
  lot: number
  name: string
  price: number
  promoPrice?: number | null
  inPromo?: boolean | null
  expirationDate: string
  purchaseDate: string
  id: string
  quantity: number
}

interface ColumnProperty {
  title: string
  dataIndex: string
  width: string
  editable: boolean
  element?: string
  // eslint-disable-next-line no-unused-vars
  render?: (text: string, record: ProductTable, index: number) => React.ReactNode
}

export default function ProductsTable(): React.ReactElement {
  const [form] = Form.useForm()
  const [products, setProducts] = useState<Array<ProductTable>>([])
  const [editingKey, setEditingKey] = useState("")

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const productQueryResult = (
          await API.graphql(graphqlOperation(listProductWarehouses))
        ) as GraphQLResult<ListProductWarehousesQuery>
        const warehouseProductsList = productQueryResult?.data?.listProductWarehouses?.items as ProductWarehouse[]
        const warehouseProducts = warehouseProductsList.map((e) => ({ ...e.product, quantity: e.quantity }))
        setProducts(warehouseProducts)
        console.log(products)
      } catch (e) {
        console.error(e)
      }
    }
    fetchProducts().then(() => console.log("Fetch completed"))
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const isEditing = (record: ProductTable): boolean => record.id === editingKey

  const edit = (record: Partial<ProductTable> & { id: React.Key }): void => {
    form.setFieldsValue(record)
    setEditingKey(record.id)
  }

  const cancel = (): void => {
    setEditingKey("")
  }

  const save = async (key: React.Key): Promise<void> => {
    const row = (await form.validateFields()) as ProductTable
    const { quantity, ...newProduct } = row
    newProduct.id = key as string

    try {
      await API.graphql(graphqlOperation(updateProduct, { input: newProduct }))
      // TODO(Add update for quantity in ProductWarehouse)
      const updateProductsList = products
        .map((product) => (product.id === key ? newProduct : product))
        .map((product) => ({ quantity, ...product }))
      setProducts(updateProductsList)
    } catch (e) {
      console.error(e)
    }
    setEditingKey("")
  }

  const columns: ColumnProperty[] = [
    {
      title: "Code",
      dataIndex: "code",
      width: "5%",
      editable: true,
      element: "string",
    },
    {
      title: "Lot",
      dataIndex: "lot",
      width: "5%",
      editable: true,
      element: "number",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
      editable: true,
      element: "string",
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "10%",
      editable: true,
      element: "number",
    },
    {
      title: "Promo price",
      dataIndex: "promoPrice",
      width: "10%",
      editable: true,
      element: "number",
    },
    {
      title: "Promo",
      dataIndex: "inPromo",
      width: "5%",
      editable: true,
      element: "bool",
    },
    {
      title: "Expiration Date",
      dataIndex: "expirationDate",
      width: "15%",
      editable: true,
      element: "date",
    },
    {
      title: "Purchase Date",
      dataIndex: "purchaseDate",
      width: "15%",
      editable: true,
      element: "date",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: "15%",
      editable: false,
      element: "number",
    },
    {
      title: "Edit",
      dataIndex: "operation",
      editable: false,
      width: "5%",
      // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
      render: (text, record: ProductTable, index) => {
        const editable = isEditing(record)
        return editable ? (
          <span>
            {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
            <Typography.Link onClick={() => save(record.id!)} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <EditOutlined disabled={editingKey !== ""} onClick={() => edit(record)} />
        )
      },
    },
  ]

  const mergedColumns: ColumnType<ProductTable>[] = columns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: ProductTable) => ({
        editing: isEditing(record),
        dataIndex: col.dataIndex,
        title: col.title,
        inputType: col.element,
        record,
        index: col.dataIndex,
      }),
    }
  })

  return (
    <div>
      <InsertProduct products={products} setProducts={setProducts} />
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={products}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </div>
  )
}
