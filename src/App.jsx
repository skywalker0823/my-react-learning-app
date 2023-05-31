import './App.css'
import Cubes from './components/Cube'
import { useState } from 'react'
import PackingList from './components/TestArea'


function App() {
  return (
    <>
    <h1 className='title'>ColoЯization</h1>
      <div className='cube_holder'>
        <Cubes />
      </div>
      <PackingList />
    </>
  )
}

export default App
