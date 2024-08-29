import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VentanaPrincipal from './components/VentanaPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VentanaPrincipal></VentanaPrincipal>
    </>
  )
}

export default App
