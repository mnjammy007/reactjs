import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  let [bgColor, setBgColor] = useState("")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <Button title='Red' textColor='white' setBgColor={setBgColor} />
            <Button title='Green' textColor='white' setBgColor={setBgColor} />
            <Button title='Blue' textColor='white' setBgColor={setBgColor} />
            <Button title='Olive' textColor='white' setBgColor={setBgColor} />
            <Button title='Gray' textColor='white' setBgColor={setBgColor} />
            <Button title='Yellow' textColor='black' setBgColor={setBgColor} />
            <Button title='Pink' textColor='black' setBgColor={setBgColor} />
            <Button title='Purple' textColor='white' setBgColor={setBgColor} />
            <Button title='Lavender' textColor='black' setBgColor={setBgColor} />
            <Button title='White' textColor='black' setBgColor={setBgColor} />
            <Button title='Black' textColor='white' setBgColor={setBgColor} />
          </div>
        </div>
        {/* <Button title='Red' bgColor='red' textColor='white' /> */}
      </div>
    </>
  )
}

export default App
