import React from "react"
import Amplify from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import awsExports from "../aws-exports.js"
import BaseLayout from "./layout/BaseLayout"

Amplify.configure(awsExports)

export default function Dashboard(): React.ReactElement {
  return (
    <Authenticator>
      {() => (
        <BaseLayout>
          <h2>TODO</h2>
        </BaseLayout>
      )}
    </Authenticator>
  )
}
