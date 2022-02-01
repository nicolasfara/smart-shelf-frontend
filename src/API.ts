/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductWarehouseInput = {
  quantity: number,
  id?: string | null,
  productWarehouseProductId: string,
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
  product: Product,
  quantity: number,
  id: string,
  createdAt: string,
  updatedAt: string,
  productWarehouseProductId: string,
};

export type Product = {
  __typename: "Product",
  code: string,
  lot: number,
  name: string,
  price: number,
  promoPrice?: number | null,
  inPromo?: boolean | null,
  expirationDate: string,
  purchaseDate: string,
  id: string,
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
  quantity: number,
  id?: string | null,
  productShelfProductId: string,
};

export type ModelProductShelfConditionInput = {
  shelfId?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelProductShelfConditionInput | null > | null,
  or?: Array< ModelProductShelfConditionInput | null > | null,
  not?: ModelProductShelfConditionInput | null,
  productShelfProductId?: ModelIDInput | null,
};

export type ProductShelf = {
  __typename: "ProductShelf",
  shelfId: number,
  product: Product,
  quantity: number,
  id: string,
  createdAt: string,
  updatedAt: string,
  productShelfProductId: string,
};

export type UpdateProductShelfInput = {
  shelfId?: number | null,
  quantity?: number | null,
  id: string,
  productShelfProductId?: string | null,
};

export type DeleteProductShelfInput = {
  id: string,
};

export type CreateProductInput = {
  code: string,
  lot: number,
  name: string,
  price: number,
  promoPrice?: number | null,
  inPromo?: boolean | null,
  expirationDate: string,
  purchaseDate: string,
  id?: string | null,
};

export type ModelProductConditionInput = {
  code?: ModelStringInput | null,
  lot?: ModelIntInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  promoPrice?: ModelFloatInput | null,
  inPromo?: ModelBooleanInput | null,
  expirationDate?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
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

export type UpdateProductInput = {
  code?: string | null,
  lot?: number | null,
  name?: string | null,
  price?: number | null,
  promoPrice?: number | null,
  inPromo?: boolean | null,
  expirationDate?: string | null,
  purchaseDate?: string | null,
  id: string,
};

export type DeleteProductInput = {
  id: string,
};

export type SearchableProductShelfFilterInput = {
  shelfId?: SearchableIntFilterInput | null,
  quantity?: SearchableIntFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  productShelfProductId?: SearchableIDFilterInput | null,
  and?: Array< SearchableProductShelfFilterInput | null > | null,
  or?: Array< SearchableProductShelfFilterInput | null > | null,
  not?: SearchableProductShelfFilterInput | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableProductShelfSortInput = {
  field?: SearchableProductShelfSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableProductShelfSortableFields {
  shelfId = "shelfId",
  quantity = "quantity",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  productShelfProductId = "productShelfProductId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableProductShelfAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableProductShelfAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableProductShelfAggregateField {
  shelfId = "shelfId",
  quantity = "quantity",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  productShelfProductId = "productShelfProductId",
}


export type SearchableProductShelfConnection = {
  __typename: "SearchableProductShelfConnection",
  items:  Array<ProductShelf | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
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
  quantity?: ModelIntInput | null,
  and?: Array< ModelProductShelfFilterInput | null > | null,
  or?: Array< ModelProductShelfFilterInput | null > | null,
  not?: ModelProductShelfFilterInput | null,
  productShelfProductId?: ModelIDInput | null,
};

export type ModelProductShelfConnection = {
  __typename: "ModelProductShelfConnection",
  items:  Array<ProductShelf | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  code?: ModelStringInput | null,
  lot?: ModelIntInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  promoPrice?: ModelFloatInput | null,
  inPromo?: ModelBooleanInput | null,
  expirationDate?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

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
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId: string,
  } | null,
};

export type UpdateProductWarehouseMutationVariables = {
  input: UpdateProductWarehouseInput,
  condition?: ModelProductWarehouseConditionInput | null,
};

export type UpdateProductWarehouseMutation = {
  updateProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId: string,
  } | null,
};

export type DeleteProductWarehouseMutationVariables = {
  input: DeleteProductWarehouseInput,
  condition?: ModelProductWarehouseConditionInput | null,
};

export type DeleteProductWarehouseMutation = {
  deleteProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId: string,
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
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productShelfProductId: string,
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
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productShelfProductId: string,
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
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productShelfProductId: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo?: boolean | null,
    expirationDate: string,
    purchaseDate: string,
    id: string,
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
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo?: boolean | null,
    expirationDate: string,
    purchaseDate: string,
    id: string,
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
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo?: boolean | null,
    expirationDate: string,
    purchaseDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SearchProductShelvesQueryVariables = {
  filter?: SearchableProductShelfFilterInput | null,
  sort?: Array< SearchableProductShelfSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableProductShelfAggregationInput | null > | null,
};

export type SearchProductShelvesQuery = {
  searchProductShelves?:  {
    __typename: "SearchableProductShelfConnection",
    items:  Array< {
      __typename: "ProductShelf",
      shelfId: number,
      product:  {
        __typename: "Product",
        code: string,
        lot: number,
        name: string,
        price: number,
        promoPrice?: number | null,
        inPromo?: boolean | null,
        expirationDate: string,
        purchaseDate: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      quantity: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      productShelfProductId: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetProductWarehouseQueryVariables = {
  id: string,
};

export type GetProductWarehouseQuery = {
  getProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId: string,
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
      product:  {
        __typename: "Product",
        code: string,
        lot: number,
        name: string,
        price: number,
        promoPrice?: number | null,
        inPromo?: boolean | null,
        expirationDate: string,
        purchaseDate: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      quantity: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      productWarehouseProductId: string,
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
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productShelfProductId: string,
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
      product:  {
        __typename: "Product",
        code: string,
        lot: number,
        name: string,
        price: number,
        promoPrice?: number | null,
        inPromo?: boolean | null,
        expirationDate: string,
        purchaseDate: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      quantity: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      productShelfProductId: string,
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
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo?: boolean | null,
    expirationDate: string,
    purchaseDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductWarehouseSubscription = {
  onCreateProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId: string,
  } | null,
};

export type OnUpdateProductWarehouseSubscription = {
  onUpdateProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId: string,
  } | null,
};

export type OnDeleteProductWarehouseSubscription = {
  onDeleteProductWarehouse?:  {
    __typename: "ProductWarehouse",
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productWarehouseProductId: string,
  } | null,
};

export type OnCreateProductShelfSubscription = {
  onCreateProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productShelfProductId: string,
  } | null,
};

export type OnUpdateProductShelfSubscription = {
  onUpdateProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productShelfProductId: string,
  } | null,
};

export type OnDeleteProductShelfSubscription = {
  onDeleteProductShelf?:  {
    __typename: "ProductShelf",
    shelfId: number,
    product:  {
      __typename: "Product",
      code: string,
      lot: number,
      name: string,
      price: number,
      promoPrice?: number | null,
      inPromo?: boolean | null,
      expirationDate: string,
      purchaseDate: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    productShelfProductId: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo?: boolean | null,
    expirationDate: string,
    purchaseDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo?: boolean | null,
    expirationDate: string,
    purchaseDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    code: string,
    lot: number,
    name: string,
    price: number,
    promoPrice?: number | null,
    inPromo?: boolean | null,
    expirationDate: string,
    purchaseDate: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
