import React from "react"
import { Form, Input } from "antd"

interface DateEditableItemProp {
  title: string
  dataIndex: string
}

export default function DateEditableItem(props: DateEditableItemProp): React.ReactElement {
  const { dataIndex, title } = props
  return (
    <Form.Item
      name={dataIndex}
      style={{ margin: 0 }}
      rules={[{
        pattern: /^\d{4}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/,
        required: true,
        message: `Please input ${title}`,
      }]}
    >
      <Input />
    </Form.Item>
  )
}
