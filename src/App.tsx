


import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [sum, setSum] = useState<number>(0)
 const sumSetter = (a:number, b:number):number => {
  setSum(a+b)
  return a + b
 }
 useEffect(() => {
  sumSetter(1,1)
 }, [])

  return (
    <>
      <h1>Hello from Shashwat {sum} </h1>
    </>
  )
}

export default App
