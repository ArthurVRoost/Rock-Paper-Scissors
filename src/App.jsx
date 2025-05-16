// IMPORTS
import { use, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Jeu from './components/Jeu/Jeu'
import Modal from './components/Modal/Modal'
import Versus from './components/Versus/Versus'

// FONCTIONS ETC
function App() {
  // CONST 
  const [afficherVersus, setAfficherVersus] = useState(false)
  const [afficherChoix, setAfficherChoix] = useState(true)
  const [joueurChoix, setJoueurChoix] = useState(null)
  const [ordiChoix, setOrdiChoix] = useState(null)
  const [result, setResult] = useState(null)
  const [score, setScore] = useState(0)
  const  choix = ["pierre", "feuille", "ciseaux"]
  
  // REGLES JEU ET CE QUE CA DOIT RETURN
  const gagnant = (joueur, ordi) =>{
    if (joueur === ordi) return "DRAW"
    if (
      (joueur === "pierre" && ordi === "ciseaux") ||
      (joueur === "feuille" && ordi === "pierre") ||
      (joueur === "ciseaux" && ordi === "feuille") 
    ){
      return "YOU WIN"
    }
    return "YOU LOSE"
  }

  // UPDATE SCORE
  const updateScore = (result) =>{
    if (result === "YOU WIN"){
      setScore(prevScore => prevScore +1)
    }
    else if(result === "YOU LOSE"){
      setScore(prevScore => prevScore -1)
    }
  }

  // RANDOM CHOIX POUR ORDI + JOUEUR CHOIX ET CHOIX PAR DEFAULT
  const pick = (choice) =>{
    if (!afficherVersus){
      const randomIndex = Math.floor(Math.random()*3)
      const choixOrdinateur = choix[randomIndex]
      const joueurChoix = choice || "ciseaux"
      const resultat = gagnant(joueurChoix, choixOrdinateur)
      setJoueurChoix(joueurChoix)
      setOrdiChoix(choixOrdinateur)
      setResult(resultat)
      updateScore(resultat)

    }
    // CREE UN TOGGLE POUR VERUS ET JEU
    setAfficherVersus(open=>!open)
    setAfficherChoix(close=>!close)
  }

  return (
    <>
    {/* EVALUATION CONDITIONNEL, SI LA CONDITION EST VRAI EXECUTE L'ACTION */}
     <Header score={score}/>
     {afficherChoix &&
      <Jeu pick={pick}/>}
      {afficherVersus && <Versus pick={pick} joueurChoix={joueurChoix} ordiChoix={ordiChoix} result={result}  />}
     <Modal/>
    </>
  )
}

export default App
