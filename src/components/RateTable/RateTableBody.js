import React from "react"
import PropTypes from "prop-types"

const RateTableBody = ({ exchangeRates }) => (
  <tbody id="rateTableBodyContainer">
    {exchangeRates.map((exchangeRate) => {
      const { from, to, rate } = exchangeRate
      return (
        <tr key={from + to}>
          <td>{`${from} / ${to}`}</td>
          <td>{rate}</td>
        </tr>
      )
    })}
  </tbody>
)

RateTableBody.propTypes = {
  exchangeRates: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      orderExpiresIn: PropTypes.number,
      status: PropTypes.string,
      max: PropTypes.number,
      min: PropTypes.number,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      minConf: PropTypes.number,
    })
  ).isRequired,
}

export default RateTableBody
