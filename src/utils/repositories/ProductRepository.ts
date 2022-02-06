import { API, graphqlOperation } from "aws-amplify"
// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphQLResult } from "@aws-amplify/api"
import log from "loglevel"
import { updateProduct } from "../../graphql/mutations"
import { ListProductShelvesQuery, Product, UpdateProductMutation } from "../../API"
import { listProductShelves } from "../../graphql/queries"

export async function updateProductShelfInfo(
  params: {id: string, inPromo: boolean, promoPrice?: number, price: number},
): Promise<Product | undefined> {
  try {
    const result = (await API.graphql(graphqlOperation(updateProduct, {
      input: params,
    }))) as GraphQLResult<UpdateProductMutation>

    if (result.data?.updateProduct) {
      log.debug("Update shelf product. Query result:", result)
      return result.data.updateProduct
    }
    return undefined
  } catch (e) {
    log.error(e)
    return undefined
  }
}

export async function getProductsByShelfId(shelfId: number): Promise<Product[]> {
  try {
    const result = (await API.graphql(graphqlOperation(listProductShelves, {
      filter: {
        shelfId: {
          eq: shelfId,
        },
      },
    }))) as GraphQLResult<ListProductShelvesQuery>

    if (result.data?.listProductShelves?.items) {
      return result.data.listProductShelves.items
        .filter((p) => p !== null)
        .map((p) => p!.product)
    }
    return []
  } catch (e) {
    log.error(e)
    return []
  }
}

export async function getAllShelfId(): Promise<number[]> {
  try {
    const result = (await API.graphql(graphqlOperation(listProductShelves))) as GraphQLResult<ListProductShelvesQuery>
    if (result.data?.listProductShelves?.items) {
      const filteredShelfId = result.data.listProductShelves.items
        .filter((p) => p !== null)
        .map((p) => p?.shelfId)
      const setIds = new Set(filteredShelfId as number[])
      return Array.from(setIds.values()).sort()
    }
    return []
  } catch (e) {
    log.error(e)
    return []
  }
}
