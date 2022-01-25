import React from "react"
import { Checkbox } from "antd"
import TextEditableItem from "./edit-items/TextEditableItem"
import NumberEditableItem from "./edit-items/NumberEditableItem"
import BoolEditableItem from "./edit-items/BoolEditableItem"
import DateEditableItem from "./edit-items/DateEditableItem"
import { Product } from "../../API"

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: string
  title: string
  inputType: string
  record: Product
  index: number
  children: React.ReactElement
}

export default function EditableCell(props: EditableCellProps): React.ReactElement {
  const {
    editing, children, inputType, title, dataIndex, record, ...rest
  } = props

  let inputNode: React.ReactElement
  switch (inputType) {
    case "number":
      inputNode = editing ? <NumberEditableItem title={title} dataIndex={dataIndex} /> : children
      break
    case "bool":
      inputNode = editing
        ? <BoolEditableItem title={title} dataIndex={dataIndex} /> : <Checkbox checked={record.inPromo ?? false} />
      break
    case "date":
      inputNode = editing ? <DateEditableItem title={title} dataIndex={dataIndex} /> : children
      break
    default:
      inputNode = editing ? <TextEditableItem title={title} dataIndex={dataIndex} /> : children
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <td {...rest}>
      {inputNode}
    </td>
  )
}
