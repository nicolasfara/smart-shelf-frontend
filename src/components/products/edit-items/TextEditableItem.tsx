import React from "react"
import { Form, Input } from "antd"

interface TextEditableItemProp {
  title: string
  dataIndex: string
}

export default function TextEditableItem(props: TextEditableItemProp): React.ReactElement {
  const { dataIndex, title } = props
  return (
    <Form.Item
      name={dataIndex}
      style={{ margin: 0 }}
      rules={[{
        required: true,
        message: `Please input ${title}`,
      }]}
    >
      <Input />
    </Form.Item>
  )
}
