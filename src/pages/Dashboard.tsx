import React from "react"
import Amplify from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import awsExports from "../aws-exports.js"

Amplify.configure(awsExports)

export default function Dashboard(): React.ReactElement {
  return (
    <Authenticator>
      {({ user }) => (
        <h1>
          hello
          {user.username}
        </h1>
      )}
    </Authenticator>
  )
}
