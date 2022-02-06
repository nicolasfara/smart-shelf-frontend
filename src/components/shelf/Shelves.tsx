import React, { useEffect, useState } from "react"
import { Card } from "antd"
// eslint-disable-next-line import/no-extraneous-dependencies
import Title from "antd/es/typography/Title"
import { getAllShelfId } from "../../utils/repositories/ProductRepository"
import ShelfCard from "./ShelfCard"

export default function Shelves(): React.ReactElement {
  const [shelves, setShelves] = useState<number[]>([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const query = async (): Promise<void> => {
      setShelves(await getAllShelfId())
    }
    query().then()
  })

  const style = {
    width: "100%",
  }

  const elems: React.ReactElement[] = []
  shelves.forEach((shelfId) => {
    elems.push(
      (<Card.Grid style={style}><ShelfCard shelfId={shelfId} update={update} setUpdate={setUpdate} /></Card.Grid>),
    )
  })

  return (
    <Card title={<Title level={1}>Shelves List</Title>}>
      {elems}
    </Card>
  )
}
