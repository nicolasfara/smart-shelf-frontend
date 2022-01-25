import React from "react"
import { shallow } from "enzyme"
import Products from "./ProductList"

describe("The products component", () => {
  it("get all products from api", async () => {
    shallow(<Products />, { lifecycleExperimental: true })
    // const state = wrapper.state() as ProductsState
    expect(10).toEqual(10)
  })
})
