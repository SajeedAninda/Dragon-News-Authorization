import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[90%] mx-auto'>
      <Header></Header>
      </div>
    </>
  )
}

export default App
