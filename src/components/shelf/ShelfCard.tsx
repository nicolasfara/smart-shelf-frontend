import React, { useEffect, useState } from "react"
import {
  Card, Form, Table, Tag,
} from "antd"
import Title from "antd/es/typography/Title"
import log from "loglevel"
import { ColumnType } from "antd/lib/table"
import { PubSub } from "aws-amplify"
import { Product } from "../../API"
import { EditElementType, ShelfEditableElement } from "./ShelfEditableElement"
import { CloseEdit, EditMenu } from "../../utils/Utils"
import { getProductsByShelfId, updateProductShelfInfo } from "../../utils/repositories/ProductRepository"

interface ShelfCardProps {
  shelfId: number
  update: boolean
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormValidation {
  id: string
  inPromo: boolean
  promoPrice?: number
  price: number
}

export default function ShelfCard(props: ShelfCardProps): React.ReactElement {
  const { shelfId, update, setUpdate } = props
  const [products, setProducts] = useState<Product[]>([])
  const [editingKey, setEditingKey] = useState("")
  const [form] = Form.useForm()

  useEffect(() => {
    const productsInShelf = async (): Promise<void> => {
      setProducts(await getProductsByShelfId(shelfId))
    }
    productsInShelf().then()
    log.debug(`Update product in shelf ${shelfId}`)
  }, [update])

  const isEditing = (record: Product): boolean => record.id === editingKey

  const edit = (record: Partial<Product> & { id: React.Key }): void => {
    log.debug("Editing: ", record.id)
    form.setFieldsValue(record)
    setEditingKey(record.id)
  }

  const cancel = (): void => {
    setEditingKey("")
  }

  const save = async (key: React.Key): Promise<void> => {
    const row = (await form.validateFields()) as FormValidation
    row.id = key as string
    const updatedProduct = await updateProductShelfInfo(row)
    if (updatedProduct) {
      log.debug("Save successfully")
      const updatedProductList = products.map((p) => (p.id === key ? updatedProduct : p))
      setProducts(updatedProductList)
      setEditingKey("")
      setUpdate(!update)
      PubSub.publish("products/update", updatedProduct).catch((e) => log.error(e))
    } else log.warn("Fail to update product")
  }

  const columns: ColumnType<Product>[] = [
    {
      title: "Name", dataIndex: "name", key: "name",
    },
    {
      title: "Code", dataIndex: "code", key: "code",
    },
    {
      title: "Lot", dataIndex: "lot", key: "lot",
    },
    {
      title: "Exp. Date", dataIndex: "expirationDate", key: "expirationDate",
    },
    {
      title: "Promo",
      key: "inPromo",
      dataIndex: "inPromo",
      render:
        (value: unknown, record: Product) => (record.inPromo ? <Tag color="red">Promo</Tag> : <div />),
      onCell: (product: Product) => ({
        title: "Promo",
        editing: editingKey !== "",
        record: product,
        elementType: EditElementType.Bool,
        dataIndex: "inPromo",
      }),
    },
    {
      title: "Promo price",
      dataIndex: "promoPrice",
      key: "promoPrice",
      onCell: (product) => ({
        title: "Promo price",
        editing: editingKey !== "",
        record: product,
        elementType: EditElementType.Number,
        dataIndex: "promoPrice",
      }),
    },
    {
      width: "5%",
      title: "Price",
      dataIndex: "price",
      key: "promo",
      onCell: (product) => ({
        title: "Price",
        editing: editingKey !== "",
        record: product,
        elementType: EditElementType.Number,
        dataIndex: "price",
      }),
    },
    {
      title: "Edit",
      dataIndex: "operation",
      render: (value: unknown, record: Product) => (isEditing(record) ? (
        <EditMenu cancel={cancel} save={() => save(record.id)} />
      ) : (<CloseEdit disabled={editingKey !== ""} onClick={() => edit(record)} />)),
    },
  ]

  return (
    <Card title={<Title level={2}>{`Shelf ${shelfId}`}</Title>} bordered>
      <Form form={form} component={false}>
        <Table
          pagination={false}
          components={{
            body: {
              cell: ShelfEditableElement,
            },
          }}
          columns={columns}
          dataSource={products}
          rowClassName="editable-row"
        />
      </Form>
    </Card>
  )
}
