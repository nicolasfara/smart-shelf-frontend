import React, { useEffect, useState } from "react"
import { Card } from "antd"
import { API, graphqlOperation } from "aws-amplify"
import log from "loglevel"
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLResult } from "@aws-amplify/api"
import Title from "antd/es/typography/Title"
import {
  Product,
  SearchableProductShelfSortableFields,
  SearchableSortDirection,
  SearchProductShelvesQuery,
} from "../../API"
import { searchProductShelves } from "../../graphql/queries"
import ShelfCard from "./ShelfCard"

export default function Shelves(): React.ReactElement {
  const [products, setProducts] = useState(new Map<number, Product[]>())

  useEffect(() => {
    const query = async (): Promise<void> => {
      try {
        const queryResult = (
          await API.graphql(graphqlOperation(
            searchProductShelves,
            {
              sort: [
                {
                  direction: SearchableSortDirection.asc,
                  field: SearchableProductShelfSortableFields.shelfId,
                },
              ],
            },
          ))
        ) as GraphQLResult<SearchProductShelvesQuery>
        log.debug(queryResult)
        if (queryResult.data?.searchProductShelves?.items) {
          const shelvesProductsMap = new Map<number, Product[]>()
          queryResult.data.searchProductShelves.items.forEach((prod) => {
            if (prod !== null) {
              const collection = shelvesProductsMap.get(prod.shelfId)
              if (!collection) {
                shelvesProductsMap.set(prod.shelfId, [prod.product])
              } else collection.push(prod.product)
            }
          })
          setProducts(shelvesProductsMap)
          log.debug(shelvesProductsMap)
          log.debug(products)
        }
      } catch (e) {
        log.error(e)
      }
    }
    query().then()
  }, [])

  const style = {
    width: "100%",
  }

  const elems: React.ReactElement[] = []
  products.forEach((value, key) => {
    elems.push((<Card.Grid style={style}><ShelfCard shelfId={key} shelfProducts={value} /></Card.Grid>))
  })
  return (
    <Card title={<Title level={1}>Shelves List</Title>}>
      {elems}
    </Card>
  )
}
