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
import "./Products.css"
import "antd/dist/antd.css"
import EditableCell from "./EditableCell"
import { listProducts } from "../../graphql/queries"
import * as APIType from "../../API"
import { Products } from "../../API"
import { updateProducts } from "../../graphql/mutations"

Amplify.configure(awsExports)

interface ColumnProperty {
  title: string
  dataIndex: string
  width: string
  editable: boolean
  element?: string
  // eslint-disable-next-line no-unused-vars
  render?: (text: string, record: Products, index: number) => React.ReactNode
}

export default function ProductsTable(): React.ReactElement {
  const [form] = Form.useForm()
  const [products, setProducts] = useState<Array<Products>>([])
  const [editingKey, setEditingKey] = useState("")

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const productQueryResult = (
          await API.graphql(graphqlOperation(listProducts))
        ) as GraphQLResult<APIType.ListProductsQuery>
        const productsList = productQueryResult?.data?.listProducts?.items as APIType.Products[] ?? []
        setProducts(productsList)
        console.log(products)
      } catch (e) {
        console.error(e)
      }
    }
    fetchProducts().then(() => console.log("Fetch completed"))
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const isEditing = (record: Products): boolean => record.id === editingKey

  const edit = (record: Partial<Products> & { id: React.Key }): void => {
    form.setFieldsValue(record)
    setEditingKey(record.id)
  }

  const cancel = (): void => {
    setEditingKey("")
  }

  const save = async (key: React.Key): Promise<void> => {
    const row = (await form.validateFields()) as Products
    row.id = key as string
    const updateProductResult = (
      await API.graphql(graphqlOperation(updateProducts, { input: { ...row } }))
    ) as GraphQLResult<Products>

    if (updateProductResult.errors) {
      console.error(updateProductResult.errors)
    }

    const newProducts = products.map((product) => (product.id === key ? row : product))
    setProducts(newProducts)

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
      title: "Edit",
      dataIndex: "operation",
      editable: false,
      width: "5%",
      // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
      render: (text, record: Products, index) => {
        const editable = isEditing(record)
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
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

  const mergedColumns: ColumnType<Products>[] = columns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: Products) => ({
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
