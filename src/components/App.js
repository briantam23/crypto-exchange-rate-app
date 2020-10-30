import React, { useState } from "react"
import RefreshRate from "./RefreshRate"
import RateTable from "./RateTable/RateTable"

const App = () => {
  const [refreshRate, setRefreshRate] = useState("5000")

  return (
    <div>
      <RefreshRate refreshRate={refreshRate} setRefreshRate={setRefreshRate} />
      <RateTable refreshRate={refreshRate} />
    </div>
  )
}

export default App
