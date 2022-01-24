import React, { useState } from "react"
import Amplify from "aws-amplify"
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Checkbox, Form, Popconfirm, Table, Typography,
} from "antd"
import moment from "moment"
import { EditOutlined } from "@ant-design/icons"
import { ColumnType } from "antd/lib/table"
import awsExports from "../../aws-exports.js"
import "./Products.css"
import "antd/dist/antd.css"
import EditableCell from "./EditableCell"
import { ProductListItem } from "./ProductListItem"

Amplify.configure(awsExports)

interface ColumnProperty {
  title: string
  dataIndex: string
  width: string
  editable: boolean
  element?: string
  // eslint-disable-next-line no-unused-vars
  render?: (text: string, record: ProductListItem, index: number) => React.ReactNode
}

function EditableTable(): React.ReactElement {
  const [form] = Form.useForm()
  const [data, setData] = useState<Array<ProductListItem>>([{
    __typename: "Products",
    key: "123456789",
    id: "123456789",
    code: "BR1244567",
    lot: 231255,
    name: "Kinder fette al latte",
    price: 10.50,
    expirationDate: moment("2022-01-23").toString(),
    purchaseDate: moment("2022-01-23").toString(),
    createdAt: moment("2022-01-23").toString(),
    updatedAt: moment("2022-01-23").toString(),
    promoPrice: 7.50,
    inPromo: true,
  }])
  const [editingKey, setEditingKey] = useState("")

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const isEditing = (record: ProductListItem): boolean => record.key === editingKey

  const edit = (record: Partial<ProductListItem> & { key: React.Key }): void => {
    form.setFieldsValue(record)
    setEditingKey(record.key)
  }

  const cancel = (): void => {
    setEditingKey("")
  }

  const save = async (key: React.Key): Promise<void> => {
    try {
      const row = (await form.validateFields()) as ProductListItem

      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        setData(newData)
        setEditingKey("")
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey("")
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo)
    }
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
      // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
      render: (text, record: ProductListItem, index) => <Checkbox disabled checked={record.inPromo} />,
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
      render: (text, record: ProductListItem, index) => {
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

  const mergedColumns: ColumnType<ProductListItem>[] = columns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: ProductListItem) => ({
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
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  )
}

export default function Products(): React.ReactElement {
  // const [products, setProducts] = useState<Array<APIType.Products>>([])

  /**
   * Effect for fetching all the products.
   */
  // useEffect(() => {
  //   const fetchProducts = async (): Promise<void> => {
  //     try {
  //       const productQueryResult = (
  //         await API.graphql(graphqlOperation(listProducts))
  //       ) as GraphQLResult<APIType.ListProductsQuery>
  //       const productsList = productQueryResult?.data?.listProducts?.items as APIType.Products[] ?? []
  //       setProducts(productsList)
  //       console.log(products)
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }
  //   fetchProducts().then(() => console.log("Fetch completed"))
  // }, [])

  return (<EditableTable />)
}
