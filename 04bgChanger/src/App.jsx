import { useState } from "react"

function App() {
  const [bgColor, setBgColor] = useState("bg-amber-700")

  const changeColor = (newColor) => {
    setBgColor(newColor)
  }
  return (
    <>
      <div
        onClick={() => changeColor("bg-amber-700")}
        className={`w-full h-screen ${bgColor} duration-200`}
      >
        <div className=" flex justify-center fixed bottom-2 w-full">
          <div className="bg-white flex  justify-center gap-3 rounded-3xl py-3 px-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                changeColor("bg-red-600")
              }}
              className="bg-red-600 rounded-2xl w-4 h-5"
            ></button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                changeColor("bg-green-600")
              }}
              className="bg-green-600 rounded-2xl w-4 h-5"
            ></button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                changeColor("bg-blue-600")
              }}
              className="bg-blue-600 rounded-2xl w-4 h-5"
            ></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
