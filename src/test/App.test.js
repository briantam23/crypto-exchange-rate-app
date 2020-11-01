import React from "react"
import { render, screen } from "@testing-library/react"
import App from "../components/App"

test("renders title", () => {
  render(<App />)
  const headerElement = screen.getByText(/Cryptocurrency Exchange Rates/i)
  expect(headerElement).toBeInTheDocument()
})
