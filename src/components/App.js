import React, { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    axios
      .get("https://liquality.io/swap/agent/api/swap/marketinfo")
      .then(res => res.data)
      .then(data => setExchangeRates(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeRates.length]) // want to only refresh rates corresponding to the selected interval

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
        {
           exchangeRates.map(exchangeRate => {
             const { from, to, rate } = exchangeRate
             return (
              <tr key={ from + to }>
                <td>{ from + to }</td>
                <td>{ rate }</td>
              </tr>
             )
           })
        }
        </tbody>
      </table>
    </div>
  )
}

export default App
