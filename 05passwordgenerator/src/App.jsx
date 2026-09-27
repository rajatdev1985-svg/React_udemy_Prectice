import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("hello")
  const passwordRef = useRef(null)
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str[char]
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    console.log("Copy")
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto px-4 py-3 my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex">
          <input
            type="text"
            className="bg-white px-3 py-1 outline-none w-full"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 text-white px-3 shrink-0 py-0.5 pointer"
          >
            Copy
          </button>
        </div>
        <div className="py-3">
          <input
            className="cursor-pointer"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <label className="ml-2" htmlFor="length">
            length : {length}
          </label>
          <input
            className="mx-3"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            type="checkbox"
            name=""
            id=""
          />
          <label htmlFor="">Number</label>

          <input
            className="mx-3"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            type="checkbox"
            name=""
            id=""
          />
          <label htmlFor="">Charactor</label>
        </div>
      </div>
    </>
  )
}

export default App
