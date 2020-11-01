import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import RefreshRate from "../components/RefreshRate"

const mockedSetRefreshRate = jest.fn()
let selectElement

beforeEach(() => {
  render(
    <RefreshRate refreshRate="5000" setRefreshRate={mockedSetRefreshRate} />
  )
  selectElement = screen.getByTestId("select")
})

test("renders select element with 3 option elements", () => {
  expect(selectElement).toHaveLength(3)
})

test("when an <option> is selected, it invokes setRefreshRate", () => {
  fireEvent.change(selectElement, { target: { value: "15000" } })
  expect(mockedSetRefreshRate).toBeCalled()
})
