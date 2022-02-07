import React from "react"
// eslint-disable-next-line import/no-unresolved
import "@aws-amplify/ui-react/styles.css"
import "./App.css"
import Amplify from "aws-amplify"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router-dom"
// eslint-disable-next-line import/no-extraneous-dependencies
import { AWSIoTProvider } from "@aws-amplify/pubsub"
import awsExports from "./aws-exports.js"
import Dashboard from "./pages/Dashboard"
import Warehouse from "./pages/Warehouse"

Amplify.configure(awsExports)
Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: "eu-west-1",
  aws_pubsub_endpoint: "wss://a2d3g7wnaaw7gh-ats.iot.eu-west-1.amazonaws.com/mqtt",
}))

export default function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/warehouse" element={<Warehouse />} />
    </Routes>
  )
}
