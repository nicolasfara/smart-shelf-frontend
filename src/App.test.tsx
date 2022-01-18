import React from "react"
import ReactDOM from "react-dom"
import { act } from "react-dom/test-utils"
import { waitFor } from "@testing-library/react"
import App from "./App"

let container: ReactDOM.Container | null

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  if (container !== null) {
    document.body.removeChild(container)
  }
  container = null
})

test("renders learn react link", async () => {
  act(() => {
    ReactDOM.render(<App />, container)
  })
  await waitFor(() => {
    const button = container?.querySelector("button")
    if (button !== null && button !== undefined) {
      expect(button.textContent).toBe("Sign iyn")
    }
  })
})
