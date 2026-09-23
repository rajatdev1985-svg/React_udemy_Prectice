import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"

function MyApp() {
  return (
    <div>
      <h1>Custome React App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
)

const areactElement = React.createElement(
  "a",
  { href: "http://google.com", target: "_blank" },
  "Click me to visit google",
)
createRoot(document.getElementById("root")).render(<App />)
