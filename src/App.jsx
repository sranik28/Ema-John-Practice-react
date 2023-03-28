import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header/Header'
import Cards from './componentes/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Cards></Cards>
    </div>
  )
}

export default App
