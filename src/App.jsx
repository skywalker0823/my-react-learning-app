import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Hello, <code>React</code>!
      </p>
    </>
  )
}

export default App
