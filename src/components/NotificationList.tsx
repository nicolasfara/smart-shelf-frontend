import React, { useEffect, useState } from "react"
import { List, Typography } from "antd"
import log from "loglevel"
import { API, graphqlOperation } from "aws-amplify"
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLResult } from "@aws-amplify/api"
import { ListProductShelvesQuery, ListProductsQuery, ProductShelf } from "../API"
import { listProducts, listProductShelves } from "../graphql/queries"

export default function NotificationList(): React.ReactElement {
  const [eolProducts, setEolProducts] = useState<ProductShelf[]>([])

  useEffect(() => {
    const query = async (): Promise<void> => {
      try {
        const today = new Date()
        const eolDate = new Date()
        eolDate.setDate(today.getDate() + 2)
        const result = (await API.graphql(graphqlOperation(listProducts, {
          filter: {
            expirationDate: {
              lt: eolDate.toISOString().split("T")[0],
            },
          },
        }))) as GraphQLResult<ListProductsQuery>

        if (result.data?.listProducts?.items) {
          log.debug(result.data.listProducts.items)
          const productsId = result.data.listProducts.items.map((p) => ({
            productShelfProductId: {
              eq: p!.id,
            },
          }))
          log.debug(productsId)
          if (productsId.length > 0) {
            const productShelfEol = (await API.graphql(graphqlOperation(listProductShelves, {
              filter: {
                or: productsId,
              },
            }))) as GraphQLResult<ListProductShelvesQuery>
            if (productShelfEol.data?.listProductShelves?.items) {
              setEolProducts(productShelfEol.data.listProductShelves.items as ProductShelf[])
            }
          } else setEolProducts([])
        }
      } catch (e) {
        log.error(e)
      }
    }
    query().then()
  }, [])

  return (
    <div>
      <Typography.Title level={2}>Expiring Products</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={eolProducts}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<Typography.Text>{`${item.product.name} - Shelf: ${item.shelfId}`}</Typography.Text>}
              description={`Code: ${item.product.code} - Lot: ${item.product.lot}`}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
