import React from "react"
import { Checkbox, Form } from "antd"

interface TextEditableItemProp {
  title: string
  dataIndex: string
}

export default function BoolEditableItem(props: TextEditableItemProp): React.ReactElement {
  const { dataIndex, title } = props
  return (
    <Form.Item
      name={dataIndex}
      style={{ margin: 0 }}
      valuePropName="checked"
      rules={[{
        required: true,
        message: `Please input ${title}`,
      }]}
    >
      <Checkbox />
    </Form.Item>
  )
}
