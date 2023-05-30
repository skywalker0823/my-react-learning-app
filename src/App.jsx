import './App.css'
import Cube from './components/Cube'
import { useState } from 'react'



function App() {
  return (
    <>
      <div className='cube_holder'>
        <h1 className='title'>Colorz</h1>
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
      </div>
    </>
  )
}

export default App
