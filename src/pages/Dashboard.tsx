import React from "react"
import { Authenticator } from "@aws-amplify/ui-react"
import BaseLayout from "./layout/BaseLayout"
import Shelves from "../components/shelf/Shelves"

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
