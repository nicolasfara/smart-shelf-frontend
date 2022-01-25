/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProductWarehouse = /* GraphQL */ `
  mutation CreateProductWarehouse(
    $input: CreateProductWarehouseInput!
    $condition: ModelProductWarehouseConditionInput
  ) {
    createProductWarehouse(input: $input, condition: $condition) {
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
export const updateProductWarehouse = /* GraphQL */ `
  mutation UpdateProductWarehouse(
    $input: UpdateProductWarehouseInput!
    $condition: ModelProductWarehouseConditionInput
  ) {
    updateProductWarehouse(input: $input, condition: $condition) {
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
export const deleteProductWarehouse = /* GraphQL */ `
  mutation DeleteProductWarehouse(
    $input: DeleteProductWarehouseInput!
    $condition: ModelProductWarehouseConditionInput
  ) {
    deleteProductWarehouse(input: $input, condition: $condition) {
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
export const createProductShelf = /* GraphQL */ `
  mutation CreateProductShelf(
    $input: CreateProductShelfInput!
    $condition: ModelProductShelfConditionInput
  ) {
    createProductShelf(input: $input, condition: $condition) {
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
export const updateProductShelf = /* GraphQL */ `
  mutation UpdateProductShelf(
    $input: UpdateProductShelfInput!
    $condition: ModelProductShelfConditionInput
  ) {
    updateProductShelf(input: $input, condition: $condition) {
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
export const deleteProductShelf = /* GraphQL */ `
  mutation DeleteProductShelf(
    $input: DeleteProductShelfInput!
    $condition: ModelProductShelfConditionInput
  ) {
    deleteProductShelf(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
