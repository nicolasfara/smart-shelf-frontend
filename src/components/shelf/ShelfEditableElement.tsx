import React from "react"
import { Product } from "../../API"
import BoolEditableItem from "../products/edit-items/BoolEditableItem"
import DateEditableItem from "../products/edit-items/DateEditableItem"
import NumberEditableItem from "../products/edit-items/NumberEditableItem"
import TextEditableItem from "../products/edit-items/TextEditableItem"

// eslint-disable-next-line no-shadow
export enum EditElementType {
  // eslint-disable-next-line no-unused-vars
  Number = "Number",
  // eslint-disable-next-line no-unused-vars
  Bool = "Bool",
  // eslint-disable-next-line no-unused-vars
  Date = "Date",
  // eslint-disable-next-line no-unused-vars
  Text = "Text",
}

export interface ShelfEditableElementProps {
  title: string
  dataIndex: string
  record: Product
  editing: boolean
  elementType: EditElementType
}

export function ShelfEditableElement(props: React.PropsWithChildren<ShelfEditableElementProps>): React.ReactElement {
  const {
    editing, children, elementType, title, dataIndex,
  } = props

  let editNode: React.ReactElement

  switch (elementType) {
    case EditElementType.Bool:
      editNode = <BoolEditableItem title={title} dataIndex={dataIndex} />
      break
    case EditElementType.Date:
      editNode = <DateEditableItem title={title} dataIndex={dataIndex} />
      break
    case EditElementType.Number:
      editNode = <NumberEditableItem title={title} dataIndex={dataIndex} />
      break
    default:
      editNode = <TextEditableItem title={title} dataIndex={dataIndex} />
      break
  }
  return (
    <td>
      {editing ? editNode : children as React.ReactElement}
    </td>
  )
}
