import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-4xl text-center text-red-600'>
        We are ready to go!!!
      </div>
    </>
  )
}

export default App
