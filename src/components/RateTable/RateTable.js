import React, { useState, useEffect } from "react"
import axios from "axios"
import PropTypes from "prop-types"
import RateTableHead from "./RateTableHead"
import RateTableBody from "./RateTableBody"

const RateTable = ({ refreshRate }) => {
  const [exchangeRates, setExchangeRates] = useState([])

  const getData = () => {
    axios
      .get("https://liquality.io/swap/agent/api/swap/marketinfo")
      .then((res) => res.data)
      .then((data) => setExchangeRates(data))
  }

  useEffect(() => {
    getData()
    const interval = setInterval(getData, refreshRate)
    // Use the clean up function of useEffect to clear last setInterval()
    return () => clearInterval(interval)
  }, [refreshRate])

  return (
    <table id="rateTableContainer">
      <RateTableHead />
      <RateTableBody exchangeRates={exchangeRates} />
    </table>
  )
}

RateTable.propTypes = {
  refreshRate: PropTypes.string.isRequired,
}

export default RateTable
