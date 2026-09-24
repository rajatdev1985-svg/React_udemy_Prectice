import { useState } from "react"
import Card from "./components/Card"

function App() {
  return (
    <>
      <h1 className="text-4xl bg-green-500 p-3 rounded-md">Sample App</h1>
      <div className="flex">
        <Card userName="Rajat Singh" />
        <Card userName="Rinku Singh" />
        <Card />
      </div>
    </>
  )
}

export default App
