import React from "react"
import { Form, InputNumber } from "antd"

interface TextEditableItemProp {
  title: string
  dataIndex: string
}

export default function NumberEditableItem(props: TextEditableItemProp): React.ReactElement {
  const { dataIndex, title } = props
  return (
    <Form.Item
      name={dataIndex}
      style={{ margin: 0 }}
      rules={[{
        required: dataIndex !== "promoPrice",
        message: `Please input ${title}`,
      }]}
    >
      <InputNumber />
    </Form.Item>
  )
}
