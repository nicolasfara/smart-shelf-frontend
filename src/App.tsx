import React from "react"
// eslint-disable-next-line import/no-unresolved
import "@aws-amplify/ui-react/styles.css"
import "./App.css"
import Amplify from "aws-amplify"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router-dom"
import awsExports from "./aws-exports.js"
import Dashboard from "./pages/Dashboard"

Amplify.configure(awsExports)

export default function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}
