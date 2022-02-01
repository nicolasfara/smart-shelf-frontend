import React from "react"
import { Card, List } from "antd"
import { BulbOutlined, EditOutlined } from "@ant-design/icons"
import Title from "antd/es/typography/Title"
import { Product } from "../../API"

interface ShelfCardProps {
  shelfId: number
  shelfProducts: Product[]
}

export default function ShelfCard(props: ShelfCardProps): React.ReactElement {
  const { shelfId, shelfProducts } = props
  return (
    <Card title={<Title level={2}>{`Shelf ${shelfId}`}</Title>} bordered>
      <List
        bordered
        itemLayout="horizontal"
        dataSource={shelfProducts}
        renderItem={(item) => (
          <List.Item key={item.id} actions={[<EditOutlined />]}>
            <div>
              {`${item.name} `}
            </div>
            <div>
              {`Code: ${item.code}`}
            </div>
            <div>
              {`Lot: ${item.lot}`}
            </div>
            <div>
              {`${item.price} \u20AC`}
            </div>
            <div>
              {item.inPromo ? <BulbOutlined style={{ color: "red" }} /> : <BulbOutlined />}
            </div>
          </List.Item>
        )}
      />
    </Card>
  )
}
