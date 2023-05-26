import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <h1>Awecome Cards</h1>
      <div className='card_holder'>
        <Card />
      </div>
      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
