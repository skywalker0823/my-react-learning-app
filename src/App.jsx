import './App.css'
import Cubes from './components/Cubes'
import FixedColorSet from './components/FixedColorSet'
// import TestArea from './components/TestArea'


function App() {
  return (
    <>
      {/* <TestArea /> */}
      <h1 className='title'>ColoЯization</h1>
        <div className='cube_holder'>
          <Cubes />
        </div>
        <FixedColorSet />
    </>
  )
}

export default App
