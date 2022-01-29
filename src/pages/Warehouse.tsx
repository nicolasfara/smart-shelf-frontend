import React from "react"
import Amplify from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import awsExports from "../aws-exports.js"
import ProductList from "../components/products/ProductList"
import BaseLayout from "./layout/BaseLayout"

Amplify.configure(awsExports)

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
