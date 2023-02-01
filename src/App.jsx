import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('red')


  return (
    <div className="body">
      <main style={{ backgroundColor: { color } }}>
        <p onClick={() => setColor(red)}></p>
        <p></p>
        <p></p>
        <p></p>
      </main>
    </div >
    // #871111
    // #5A6628
    // #113287
    // #761187
  )
}

export default App
