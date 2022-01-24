// eslint-disable-next-line react/function-component-definition
import React from "react"
import {
  Checkbox, Form, Input, InputNumber,
} from "antd"
import { ProductListItem } from "./ProductListItem"

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: string
  title: string
  inputType: string
  record: ProductListItem
  index: number
  children: React.ReactNode
}

export default function EditableCell(props: EditableCellProps): React.ReactElement {
  const {
    editing, dataIndex, title, children, inputType, record, ...rest
  } = props

  let inputNode: React.ReactElement
  if (inputType === "number") inputNode = <InputNumber />
  else if (inputType === "bool") inputNode = <Checkbox defaultChecked={record.inPromo} />
  else inputNode = <Input />

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <td {...rest}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              pattern: inputType === "date" ? /^\d{4}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/ : /.*/,
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}
