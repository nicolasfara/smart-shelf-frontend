import * as React from "react"
import { Popconfirm, Typography } from "antd"
import { EditOutlined } from "@ant-design/icons"

export function EditMenu(props: { save: () => void, cancel: () => void }): React.ReactElement {
  const { save, cancel } = props
  return (
    <span>
      <Typography.Link onClick={save} style={{ marginRight: 8 }}>
        Save
      </Typography.Link>
      <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
        <Typography.Link>Cancel</Typography.Link>
      </Popconfirm>
    </span>
  )
}

export function CloseEdit(props: { disabled: boolean, onClick: () => void }): React.ReactElement {
  const { disabled, onClick } = props
  return (
    <Typography.Link disabled={disabled} onClick={onClick}>
      <EditOutlined />
    </Typography.Link>
  )
}
