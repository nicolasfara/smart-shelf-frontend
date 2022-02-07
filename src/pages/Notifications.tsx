import React from "react"
import { Authenticator } from "@aws-amplify/ui-react"
import BaseLayout from "./layout/BaseLayout"
import NotificationList from "../components/NotificationList"

export default function Notifications(): React.ReactElement {
  return (
    <Authenticator>
      {() => (
        <BaseLayout>
          <NotificationList />
        </BaseLayout>
      )}
    </Authenticator>
  )
}
