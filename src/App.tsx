import React from "react"
import { Authenticator, Button } from "@aws-amplify/ui-react"
// eslint-disable-next-line import/no-unresolved
import "@aws-amplify/ui-react/styles.css"
import "./App.css"
import Amplify from "aws-amplify"
import awsExports from "./aws-exports.js"

Amplify.configure(awsExports)

export default function App(): React.ReactElement {
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
