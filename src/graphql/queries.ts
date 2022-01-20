/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProductWarehouse = /* GraphQL */ `
  query GetProductWarehouse($id: ID!) {
    getProductWarehouse(id: $id) {
      product {
        id
        code
        lot
        name
        price
        expirationDay
        purchaseDate
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
          id
          code
          lot
          name
          price
          expirationDay
          purchaseDate
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
      productID
      product {
        id
        code
        lot
        name
        price
        expirationDay
        purchaseDate
        createdAt
        updatedAt
      }
      quantity
      id
      createdAt
      updatedAt
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
        productID
        product {
          id
          code
          lot
          name
          price
          expirationDay
          purchaseDate
          createdAt
          updatedAt
        }
        quantity
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: String!) {
    getProduct(id: $id) {
      id
      code
      lot
      name
      price
      expirationDay
      purchaseDate
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $id: String
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        code
        lot
        name
        price
        expirationDay
        purchaseDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
