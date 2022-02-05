import React, { useState } from "react"
import {
  Card, Form, Table, Tag,
} from "antd"
import Title from "antd/es/typography/Title"
import log from "loglevel"
import { ColumnType } from "antd/lib/table"
import { Product } from "../../API"
import { EditElementType, ShelfEditableElement } from "./ShelfEditableElement"
import { CloseEdit, EditMenu } from "../../utils/Utils"

interface ShelfCardProps {
  shelfId: number
  shelfProducts: Product[]
}

export default function ShelfCard(props: ShelfCardProps): React.ReactElement {
  const { shelfId, shelfProducts } = props
  const [editingKey, setEditingKey] = useState("")
  const [form] = Form.useForm()

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
    log.debug("Editing key", key)
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
          dataSource={shelfProducts}
          rowClassName="editable-row"
        />
      </Form>
    </Card>
  )
}
