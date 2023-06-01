import './App.css'
import Cubes from './components/Cubes'
import FixedColorSet from './components/fixedColorSet'


function App() {
  return (
    <>
    <h1 className='title'>ColoЯization</h1>
      <div className='cube_holder'>
        <Cubes />
          </div>
        <FixedColorSet />
    </>
  )
}

export default App
