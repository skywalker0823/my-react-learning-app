import './App.css'
import Cubes from './components/Cubes'
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
