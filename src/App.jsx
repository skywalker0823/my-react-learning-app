import './App.css'
import Cubes from './components/Cube'
import RefreshButton from './components/RefreshBtn'
import { useState } from 'react'



function App() {
  return (
    <>
      <div className='cube_holder'>
        <h1 className='title'>Colorz</h1>
        <Cubes />
      </div>
    </>
  )
}

export default App
