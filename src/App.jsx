import './App.css'
import styled from 'styled-components'
import HomePage from './Components/HomePage';
import { useState } from 'react';
import GamePlay from './Components/GamePlay';



function App() {
  const [isGameStarted, setIsGameStarted] = useState(false) 

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev )
  }
  return (
    <>
      {
        isGameStarted ? <GamePlay/> : <HomePage toggle={toggleGamePlay}/>
      }
      
    </>
  )
}

export default App
