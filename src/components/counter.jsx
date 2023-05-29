import { useState } from 'react'
import Updater from '../services/updater'


const Counter = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        </div>
    )
    }

export default Counter