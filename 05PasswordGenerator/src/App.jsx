import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')

  // useRef is used to store the value of passwordGenerator function
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) str += '0123456789'
    if (includeSymbols) str += '!@#$%^&*()_+~|}{[]:;?><,./-='
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }
    setPassword(password)
  }, [length, includeNumbers, includeSymbols, setPassword]) // even if we don't use passwordGenerator in dependency array, it will still work find why?

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 15) we do it if we need to select a specific range of text
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => passwordGenerator(), [length, includeNumbers, includeSymbols, passwordGenerator]) // even if we don't use passwordGenerator in dependency array, it will still work find why?

  return (
    <>
      <div className="w-full max-w-md max-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={includeNumbers} id='numberInput' onChange={() => { setIncludeNumbers((prev) => !prev) }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={includeSymbols} id='symbolsInput' onChange={() => { setIncludeSymbols((prev) => !prev) }} />
            <label htmlFor="symbolsInput">Symbols</label>
          </div>
        </div>
        {/* <div className="flex text-sm gap-x-2">
          
        </div> */}
      </div>
    </>
  )
}

export default App
