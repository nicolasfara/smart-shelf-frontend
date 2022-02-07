import React from "react"
import { Authenticator } from "@aws-amplify/ui-react"
import ProductList from "../components/products/ProductList"
import BaseLayout from "./layout/BaseLayout"

export default function Warehouse(): React.ReactElement {
  return (
    <Authenticator>
      {() => (
        <BaseLayout>
          <ProductList />
        </BaseLayout>
      )}
    </Authenticator>
  )
}
