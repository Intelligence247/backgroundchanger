import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('')
  return (
    <div className="body">
      <main style={{ backgroundColor: color == 871111 ? '#871111' : color == '56628' ? '#5A6628' : color == '113287' ? '#113287' : color == '761187' ? '#761187' : '' }}>
        <p onClick={() => setColor(871111)}></p>
        <p onClick={() => setColor(56628)}></p>
        <p onClick={() => setColor(113287)}></p>
        <p onClick={() => setColor(761187)}></p>
      </main>
    </div >
  )
}

export default App
