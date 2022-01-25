/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProductWarehouse = /* GraphQL */ `
  query GetProductWarehouse($id: ID!) {
    getProductWarehouse(id: $id) {
      product {
        code
        lot
        name
        price
        promoPrice
        inPromo
        expirationDate
        purchaseDate
        id
        createdAt
        updatedAt
      }
      quantity
      id
      createdAt
      updatedAt
      productWarehouseProductId
    }
  }
`;
export const listProductWarehouses = /* GraphQL */ `
  query ListProductWarehouses(
    $filter: ModelProductWarehouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductWarehouses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        product {
          code
          lot
          name
          price
          promoPrice
          inPromo
          expirationDate
          purchaseDate
          id
          createdAt
          updatedAt
        }
        quantity
        id
        createdAt
        updatedAt
        productWarehouseProductId
      }
      nextToken
    }
  }
`;
export const getProductShelf = /* GraphQL */ `
  query GetProductShelf($id: ID!) {
    getProductShelf(id: $id) {
      shelfId
      product {
        code
        lot
        name
        price
        promoPrice
        inPromo
        expirationDate
        purchaseDate
        id
        createdAt
        updatedAt
      }
      quantity
      id
      createdAt
      updatedAt
      productShelfProductId
    }
  }
`;
export const listProductShelves = /* GraphQL */ `
  query ListProductShelves(
    $filter: ModelProductShelfFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductShelves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        shelfId
        product {
          code
          lot
          name
          price
          promoPrice
          inPromo
          expirationDate
          purchaseDate
          id
          createdAt
          updatedAt
        }
        quantity
        id
        createdAt
        updatedAt
        productShelfProductId
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      code
      lot
      name
      price
      promoPrice
      inPromo
      expirationDate
      purchaseDate
      id
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        code
        lot
        name
        price
        promoPrice
        inPromo
        expirationDate
        purchaseDate
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
