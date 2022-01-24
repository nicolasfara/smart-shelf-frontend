// eslint-disable-next-line react/function-component-definition
import React from "react"
import {
  Checkbox, DatePicker, Form, Input, InputNumber,
} from "antd"
import moment from "moment"
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
  else if (inputType === "date") inputNode = <DatePicker defaultValue={moment()} />
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
