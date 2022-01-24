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
  product?: Products | null,
  quantity: number,
  id: string,
  createdAt: string,
  updatedAt: string,
  productWarehouseProductId?: string | null,
};

export type Products = {
  __typename: "Products",
  id: string,
  code: string,
  lot: number,
  name: string,
  price: number,
  promoPrice?: number | null,
  inPromo: boolean,
  expirationDate: string,
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
  product?: Products | null,
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

export type CreateProductsInput = {
  id?: string | null,
  code: string,
  lot: number,
  name: string,
  price: number,
  promoPrice?: number | null,
  inPromo: boolean,
  expirationDate: string,
  purchaseDate: string,
};

export type ModelProductsConditionInput = {
  code?: ModelStringInput | null,
  lot?: ModelIntInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  promoPrice?: ModelFloatInput | null,
  inPromo?: ModelBooleanInput | null,
  expirationDate?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  and?: Array< ModelProductsConditionInput | null > | null,
  or?: Array< ModelProductsConditionInput | null > | null,
  not?: ModelProductsConditionInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductsInput = {
  id: string,
  code?: string | null,
  lot?: number | null,
  name?: string | null,
  price?: number | null,
  promoPrice?: number | null,
  inPromo?: boolean | null,
  expirationDate?: string | null,
  purchaseDate?: string | null,
};

export type DeleteProductsInput = {
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

export type ModelProductsFilterInput = {
  id?: ModelStringInput | null,
  code?: ModelStringInput | null,
  lot?: ModelIntInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  promoPrice?: ModelFloatInput | null,
  inPromo?: ModelBooleanInput | null,
  expirationDate?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  and?: Array< ModelProductsFilterInput | null > | null,
  or?: Array< ModelProductsFilterInput | null > | null,
  not?: ModelProductsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProductsConnection = {
  __typename: "ModelProductsConnection",
  items:  Array<Products | null >,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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

export type CreateProductsMutationVariables = {
  input: CreateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type CreateProductsMutation = {
  createProducts?:  {
    __typename: "Products",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo: boolean,
    expirationDate: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductsMutationVariables = {
  input: UpdateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type UpdateProductsMutation = {
  updateProducts?:  {
    __typename: "Products",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo: boolean,
    expirationDate: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductsMutationVariables = {
  input: DeleteProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type DeleteProductsMutation = {
  deleteProducts?:  {
    __typename: "Products",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo: boolean,
    expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
        __typename: "Products",
        id: string,
        code: string,
        lot: number,
        name: string,
        price: number,
        promoPrice?: number | null,
        inPromo: boolean,
        expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
        __typename: "Products",
        id: string,
        code: string,
        lot: number,
        name: string,
        price: number,
        promoPrice?: number | null,
        inPromo: boolean,
        expirationDate: string,
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

export type GetProductsQueryVariables = {
  id: string,
};

export type GetProductsQuery = {
  getProducts?:  {
    __typename: "Products",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo: boolean,
    expirationDate: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  id?: string | null,
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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
      __typename: "Products",
      id: string,
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo: boolean,
      expirationDate: string,
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

export type OnCreateProductsSubscription = {
  onCreateProducts?:  {
    __typename: "Products",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo: boolean,
    expirationDate: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductsSubscription = {
  onUpdateProducts?:  {
    __typename: "Products",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo: boolean,
    expirationDate: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductsSubscription = {
  onDeleteProducts?:  {
    __typename: "Products",
    id: string,
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo: boolean,
    expirationDate: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
