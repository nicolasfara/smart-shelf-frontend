// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ProductWarehouse, Product, ProductShelf } = initSchema(schema);

export {
  ProductWarehouse,
  Product,
  ProductShelf
};