import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductWarehouseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductShelfMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ProductWarehouse {
  readonly id: string;
  readonly product: Product;
  readonly quantity: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly productWarehouseProductId: string;
  constructor(init: ModelInit<ProductWarehouse, ProductWarehouseMetaData>);
  static copyOf(source: ProductWarehouse, mutator: (draft: MutableModel<ProductWarehouse, ProductWarehouseMetaData>) => MutableModel<ProductWarehouse, ProductWarehouseMetaData> | void): ProductWarehouse;
}

export declare class Product {
  readonly id: string;
  readonly code: string;
  readonly lot: number;
  readonly name: string;
  readonly price: number;
  readonly promoPrice?: number;
  readonly inPromo?: boolean;
  readonly expirationDate: string;
  readonly purchaseDate: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class ProductShelf {
  readonly id: string;
  readonly shelfId: number;
  readonly product: Product;
  readonly quantity: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly productShelfProductId: string;
  constructor(init: ModelInit<ProductShelf, ProductShelfMetaData>);
  static copyOf(source: ProductShelf, mutator: (draft: MutableModel<ProductShelf, ProductShelfMetaData>) => MutableModel<ProductShelf, ProductShelfMetaData> | void): ProductShelf;
}