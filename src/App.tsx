import React, { useEffect } from "react"
import { Authenticator, Button } from "@aws-amplify/ui-react"
// eslint-disable-next-line import/no-unresolved
import "@aws-amplify/ui-react/styles.css"
import "./App.css"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import awsExports from "./aws-exports.js"
import { listProducts } from "./graphql/queries"
import { createProduct } from "./graphql/mutations"

Amplify.configure(awsExports)

export default function App(): React.ReactElement {
  const product = {
    code: "12345",
    lot: 200122,
    name: "Pan bauletti",
    expirationDate: new Date().toISOString().split("T")[0],
    price: 2.50,
    purchaseDate: new Date().toISOString().split("T")[0],
  }
  useEffect(() => {
    async function getProduct(): Promise<object> {
      await API.graphql(graphqlOperation(createProduct, { input: product }))
      return API.graphql(graphqlOperation(listProducts))
    }
    getProduct()
      .then((prod) => console.log(prod))
      .catch((err) => console.log(err))
  })

  return (
    <Authenticator>
      {
        ({ signOut, user }) => (
          <main>
            <h1>
              Hello
              {user.username}
            </h1>
            <Button id="signinBtn" onClick={signOut}>Sign out</Button>
          </main>
        )
      }
    </Authenticator>
  )
}
