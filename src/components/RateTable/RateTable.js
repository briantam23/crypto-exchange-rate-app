import React, { useState, useEffect } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import RateTableHead from "./RateTableHead"
import RateTableBody from "./RateTableBody"

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
    <div>
      <table>
        <RateTableHead />
        <RateTableBody exchangeRates={exchangeRates} />
      </table>
    </div>
  )
}

RateTable.propTypes = {
  refreshRate: PropTypes.string.isRequired,
}

export default RateTable
