import React from "react"
import { render, screen } from "@testing-library/react"
import RateTableBody from "../components/RateTable/RateTableBody"

const exchangeRates = [
  {
    from: "BTC",
    to: "ETH",
    rate: 34.91744058,
    orderExpiresIn: 7200000,
    status: "ACTIVE",
    max: 391898870,
    min: 1000000,
    createdAt: "2020-04-07T18:43:23.301Z",
    updatedAt: "2020-11-01T20:45:38.776Z",
    minConf: 1,
  },
  {
    from: "ETH",
    to: "BTC",
    rate: 0.02809574,
    orderExpiresIn: 7200000,
    status: "ACTIVE",
    max: 171747341354299230000,
    min: 300000000000000000,
    createdAt: "2020-04-07T18:43:23.301Z",
    updatedAt: "2020-11-01T20:45:38.775Z",
    minConf: 1,
  },
  {
    from: "DAI",
    to: "BTC",
    rate: 0.00007252,
    orderExpiresIn: 7200000,
    status: "ACTIVE",
    max: 6.653405442548935e22,
    min: 100000000000000000000,
    createdAt: "2020-04-07T18:43:23.301Z",
    updatedAt: "2020-11-01T20:45:38.777Z",
    minConf: 1,
  },
]

test("renders exchange rates prop", () => {
  render(<RateTableBody exchangeRates={exchangeRates} />)
  const tableRowElement = screen.getAllByTestId("tr")
  expect(tableRowElement).toHaveLength(3)
})
