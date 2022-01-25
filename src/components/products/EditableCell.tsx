import React from "react"
import { Checkbox } from "antd"
import { Products } from "../../API"
import TextEditableItem from "./edit-items/TextEditableItem"
import NumberEditableItem from "./edit-items/NumberEditableItem"
import BoolEditableItem from "./edit-items/BoolEditableItem"
import DateEditableItem from "./edit-items/DateEditableItem"

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: string
  title: string
  inputType: string
  record: Products
  index: number
  children: React.ReactElement
}

export default function EditableCell(props: EditableCellProps): React.ReactElement {
  const {
    editing, children, inputType, title, dataIndex, record, ...rest
  } = props

  let inputNode: React.ReactElement
  if (inputType === "number") {
    inputNode = editing ? <NumberEditableItem title={title} dataIndex={dataIndex} /> : children
  } else
  if (inputType === "bool") {
    inputNode = editing
      ? <BoolEditableItem title={title} dataIndex={dataIndex} /> : <Checkbox checked={record.inPromo} />
  } else
  if (inputType === "date") {
    inputNode = editing ? <DateEditableItem title={title} dataIndex={dataIndex} /> : children
  } else inputNode = editing ? <TextEditableItem title={title} dataIndex={dataIndex} /> : children

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <td {...rest}>
      {inputNode}
    </td>
  )
}
