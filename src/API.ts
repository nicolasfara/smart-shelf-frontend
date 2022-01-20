/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductWarehouseInput = {
  quantity: number,
  id?: string | null,
  productWarehouseProductId?: string | null,
};

export type ModelProductWarehouseConditionInput = {
  quantity?: ModelIntInput | null,
  and?: Array< ModelProductWarehouseConditionInput | null > | null,
  or?: Array< ModelProductWarehouseConditionInput | null > | null,
  not?: ModelProductWarehouseConditionInput | null,
  productWarehouseProductId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ProductWarehouse = {
  __typename: "ProductWarehouse",
  product?: Product | null,
  quantity: number,
  id: string,
  createdAt: string,
  updatedAt: string,
  productWarehouseProductId?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  code: string,
  lot: number,
  name: string,
  price: number,
  expirationDay: string,
  purchaseDate: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductWarehouseInput = {
  quantity?: number | null,
  id: string,
  productWarehouseProductId?: string | null,
};

export type DeleteProductWarehouseInput = {
  id: string,
};

export type CreateProductShelfInput = {
  shelfId: number,
  productID: string,
  quantity: number,
  id?: string | null,
};

export type ModelProductShelfConditionInput = {
  shelfId?: ModelIntInput | null,
  productID?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelProductShelfConditionInput | null > | null,
  or?: Array< ModelProductShelfConditionInput | null > | null,
  not?: ModelProductShelfConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ProductShelf = {
  __typename: "ProductShelf",
  shelfId: number,
  productID: string,
  product?: Product | null,
  quantity: number,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductShelfInput = {
  shelfId?: number | null,
  productID?: string | null,
  quantity?: number | null,
  id: string,
};

export type DeleteProductShelfInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  code: string,
  lot: number,
  name: string,
  price: number,
  expirationDay: string,
  purchaseDate: string,
};

export type ModelProductConditionInput = {
  code?: ModelStringInput | null,
  lot?: ModelIntInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  expirationDay?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInput = {
  id: string,
  code?: string | null,
  lot?: number | null,
  name?: string | null,
  price?: number | null,
  expirationDay?: string | null,
  purchaseDate?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type ModelProductWarehouseFilterInput = {
  quantity?: ModelIntInput | null,
  and?: Array< ModelProductWarehouseFilterInput | null > | null,
  or?: Array< ModelProductWarehouseFilterInput | null > | null,
  not?: ModelProductWarehouseFilterInput | null,
  productWarehouseProductId?: ModelIDInput | null,
};

export type ModelProductWarehouseConnection = {
  __typename: "ModelProductWarehouseConnection",
  items:  Array<ProductWarehouse | null >,
  nextToken?: string | null,
};

export type ModelProductShelfFilterInput = {
  shelfId?: ModelIntInput | null,
  productID?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelProductShelfFilterInput | null > | null,
  or?: Array< ModelProductShelfFilterInput | null > | null,
  not?: ModelProductShelfFilterInput | null,
};

export type ModelProductShelfConnection = {
  __typename: "ModelProductShelfConnection",
  items:  Array<ProductShelf | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelStringInput | null,
  code?: ModelStringInput | null,
  lot?: ModelIntInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  expirationDay?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type CreateProductWarehouseMutationVariables = {
  input: CreateProductWarehouseInput,
  condition?: ModelProductWarehouseConditionInput | null,
};

export type CreateProductWarehouseMutation = {
  createProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId?: string | null,
  } | null,
};

export type UpdateProductWarehouseMutationVariables = {
  input: UpdateProductWarehouseInput,
  condition?: ModelProductWarehouseConditionInput | null,
};

export type UpdateProductWarehouseMutation = {
  updateProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId?: string | null,
  } | null,
};

export type DeleteProductWarehouseMutationVariables = {
  input: DeleteProductWarehouseInput,
  condition?: ModelProductWarehouseConditionInput | null,
};

export type DeleteProductWarehouseMutation = {
  deleteProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId?: string | null,
  } | null,
};

export type CreateProductShelfMutationVariables = {
  input: CreateProductShelfInput,
  condition?: ModelProductShelfConditionInput | null,
};

export type CreateProductShelfMutation = {
  createProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductShelfMutationVariables = {
  input: UpdateProductShelfInput,
  condition?: ModelProductShelfConditionInput | null,
};

export type UpdateProductShelfMutation = {
  updateProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductShelfMutationVariables = {
  input: DeleteProductShelfInput,
  condition?: ModelProductShelfConditionInput | null,
};

export type DeleteProductShelfMutation = {
  deleteProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    expirationDay: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    expirationDay: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    expirationDay: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductWarehouseQueryVariables = {
  id: string,
};

export type GetProductWarehouseQuery = {
  getProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId?: string | null,
  } | null,
};

export type ListProductWarehousesQueryVariables = {
  filter?: ModelProductWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductWarehousesQuery = {
  listProductWarehouses?:  {
    __typename: "ModelProductWarehouseConnection",
    items:  Array< {
      __typename: "ProductWarehouse",
      product?:  {
        __typename: "Product",
        id: string,
        code: string,
        lot: number,
        name: string,
        price: number,
        expirationDay: string,
        purchaseDate: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      quantity: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      productWarehouseProductId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductShelfQueryVariables = {
  id: string,
};

export type GetProductShelfQuery = {
  getProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductShelvesQueryVariables = {
  filter?: ModelProductShelfFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductShelvesQuery = {
  listProductShelves?:  {
    __typename: "ModelProductShelfConnection",
    items:  Array< {
      __typename: "ProductShelf",
      shelfId: number,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        code: string,
        lot: number,
        name: string,
        price: number,
        expirationDay: string,
        purchaseDate: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      quantity: number,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    expirationDay: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  id?: string | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductWarehouseSubscription = {
  onCreateProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId?: string | null,
  } | null,
};

export type OnUpdateProductWarehouseSubscription = {
  onUpdateProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId?: string | null,
  } | null,
};

export type OnDeleteProductWarehouseSubscription = {
  onDeleteProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId?: string | null,
  } | null,
};

export type OnCreateProductShelfSubscription = {
  onCreateProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductShelfSubscription = {
  onUpdateProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductShelfSubscription = {
  onDeleteProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      expirationDay: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    expirationDay: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    expirationDay: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    expirationDay: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
