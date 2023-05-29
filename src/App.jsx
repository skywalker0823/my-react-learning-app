import './App.css'
import Card from './components/Card'
import Counter from './components/counter'


function App() {
  return (
    <>
     <h1>Awesome Cards</h1>
      <div className='card_holder'>
        <Card />
      </div>
      <div>DB updater</div>
        <Counter />
        <Counter />

    </>
  )
}

export default App
