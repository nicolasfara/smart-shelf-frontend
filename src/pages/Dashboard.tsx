import React from "react"
import Amplify from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import awsExports from "../aws-exports.js"
import BaseLayout from "./layout/BaseLayout"
import Shelves from "../components/shelf/Shelves"

Amplify.configure(awsExports)

export default function Dashboard(): React.ReactElement {
  return (
    <Authenticator>
      {() => (
        <BaseLayout>
          <Shelves />
        </BaseLayout>
      )}
    </Authenticator>
  )
}
