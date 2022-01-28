import React from "react"
import Amplify from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import awsExports from "../aws-exports.js"
import ProductList from "../components/products/ProductList"

Amplify.configure(awsExports)

export default function Dashboard(): React.ReactElement {
  return (
    <Authenticator>
      {() => (
        <div>
          <ProductList />
        </div>
      )}
    </Authenticator>
  )
}
