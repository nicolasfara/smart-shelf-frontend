/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProductWarehouse = /* GraphQL */ `
  subscription OnCreateProductWarehouse {
    onCreateProductWarehouse {
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
export const onUpdateProductWarehouse = /* GraphQL */ `
  subscription OnUpdateProductWarehouse {
    onUpdateProductWarehouse {
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
export const onDeleteProductWarehouse = /* GraphQL */ `
  subscription OnDeleteProductWarehouse {
    onDeleteProductWarehouse {
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
export const onCreateProductShelf = /* GraphQL */ `
  subscription OnCreateProductShelf {
    onCreateProductShelf {
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
export const onUpdateProductShelf = /* GraphQL */ `
  subscription OnUpdateProductShelf {
    onUpdateProductShelf {
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
export const onDeleteProductShelf = /* GraphQL */ `
  subscription OnDeleteProductShelf {
    onDeleteProductShelf {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
