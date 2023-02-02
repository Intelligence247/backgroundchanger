import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('')
  return (
    <div className="body">
      <main style={{ backgroundColor: color }}>
        <p onClick={() => setColor('#871111')}></p>
        <p onClick={() => setColor('#5A6628')}></p>
        <p onClick={() => setColor('#113287')}></p>
        <p onClick={() => setColor('#761187')}></p>
      </main>
    </div >
  )
}

export default App
