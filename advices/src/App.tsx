import { useState } from 'react'
import Astronaut from './components/Astronaut'
import './App.css'
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
function App() {

    const url: string = `https://api.adviceslip.com/advice`
    const getAdvice = async () => {
    const response = fetch(url)
    const data = await (await response).json()
    console.log(data)
    setAdvice(data.slip.advice)
    }

    const [advice, setAdvice] = useState<string>('')
    
    const [text] = useTypewriter({
      words: [advice],
      delaySpeed: 6000
    })


  return (
    <div>
      <Astronaut />
      <button onClick={getAdvice} className='shadow__btn'>Aqui tome seu conselho</button>
      <h1 className='advice'>{text}</h1>
    </div>
  )
}

export default App
