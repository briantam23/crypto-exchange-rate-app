import React from "react"
import PropTypes from "prop-types"

const RefreshRate = ({ refreshRate, setRefreshRate }) => {
  const handleChange = (e) => setRefreshRate(e.target.value)

  return (
    <div id="refreshRateContainer">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="refreshRate">Refresh every:</label>
      <select
        value={refreshRate}
        onBlur={handleChange}
        onChange={handleChange}
        id="refreshRate"
      >
        <option value="5000">5 seconds</option>
        <option value="10000">10 seconds</option>
        <option value="15000">15 seconds</option>
      </select>
    </div>
  )
}

RefreshRate.propTypes = {
  refreshRate: PropTypes.string.isRequired,
  setRefreshRate: PropTypes.func.isRequired,
}

export default RefreshRate
