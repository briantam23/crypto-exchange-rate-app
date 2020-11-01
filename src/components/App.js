import React, { useState } from "react"
import RefreshRate from "./RefreshRate"
import RateTable from "./RateTable/RateTable"

const App = () => {
  const [refreshRate, setRefreshRate] = useState("5000")

  return (
    <>
      <h1 id="title">Cryptocurrency Exchange Rates</h1>
      <hr />
      <RefreshRate refreshRate={refreshRate} setRefreshRate={setRefreshRate} />
      <RateTable refreshRate={refreshRate} />
    </>
  )
}

export default App
