import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Jeu from './components/Jeu/Jeu'
import Modal from './components/Modal/Modal'
import Versus from './components/Versus/Versus'

function App() {
  const [afficherVersus, setAfficherVersus] = useState(false)
  const [afficherChoix, setAfficherChoix] = useState(true)
  const pick = () =>{
    setAfficherVersus(open=>!open)
    setAfficherChoix(close=>!close)
  }

  return (
    <>
     <Header/>
     {afficherChoix &&
      <Jeu pick={pick}/>}
      {afficherVersus && <Versus pick={pick}/>}
     <Modal/>
    </>
  )
}

export default App
