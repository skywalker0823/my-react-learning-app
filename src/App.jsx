import './App.css'
import Cubes from './components/Cube'
import { useState } from 'react'
// import TestArea from './components/TestArea'



function App() {
  return (
    <>
    <h1 className='title'>Colorz</h1>
      <div className='cube_holder'>
        <Cubes />
      </div>
      {/* <TestArea /> */}
    </>
  )
}

export default App
