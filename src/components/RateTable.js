import React, { useState, useEffect } from "react"
import axios from "axios"
import PropTypes from "prop-types"

const RateTable = ({ refreshRate }) => {
  const [exchangeRates, setExchangeRates] = useState([])

  const getData = () => {
    console.log("foo")
    axios
      .get("https://liquality.io/swap/agent/api/swap/marketinfo")
      .then((res) => res.data)
      .then((data) => setExchangeRates(data))
  }

  useEffect(() => {
    getData()
    const interval = setInterval(getData, refreshRate)
    return () => clearInterval(interval)
  }, [refreshRate])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Cryptocurrency Exchange</th>
            <th>Live Rate</th>
          </tr>
        </thead>
        <tbody>
          {exchangeRates.map((exchangeRate) => {
            const { from, to, rate } = exchangeRate
            return (
              <tr key={from + to}>
                <td>{from + to}</td>
                <td>{rate}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

RateTable.propTypes = {
  refreshRate: PropTypes.string.isRequired,
}

export default RateTable
