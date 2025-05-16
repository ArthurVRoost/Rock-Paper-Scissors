import { useState } from "react";
import "./versus.css"
import { ciseaux, feuille, pierre } from "../Jeu/Jeu";

export default function Versus({pick, joueurChoix, ordiChoix, result}) {
    const choixImg = (choice)=>{
        switch (choice) {
            case "pierre":
                return pierre
            case "feuille":
                return feuille
            case "ciseaux":
                return ciseaux
            default:
                return ciseaux
                break;
        }
    }
    const pulseClasse = (qui) => {
  if (result === "DRAW") return ""; 
  if (result === "YOU WIN" && qui === "joueur") return "pulse";
  if (result === "YOU LOSE" && qui === "ordi") return "pulse";
  return "";
};
   const styleClasse = (choice) => {
  switch (choice) {
    case "feuille":
      return "feuilleStyle";
    case "ciseaux":
      return "ciseauxStyle";
    case "pierre":
      return "pierreStyle";
    default:
      return "";
  }

}
    return(
        <>
        <div className="divVersus">
            <div className="versusDiv1">
                <div className="versusDiv1Div1">
                    <h2 className="versusDiv1Div1H2">YOU PICKED</h2>
                </div>
                <div className="versusDiv1Div2 ">
                    <button className={`circle ${styleClasse(joueurChoix)} ${pulseClasse("joueur")}`}> <img className="versusDiv1Div2Img" src={choixImg(joueurChoix)} alt="" /></button>
                    
                </div>
            </div>
            <div className="versusDiv2">
                <div className="versusDiv2Div1">
                    <h1 className="versusDiv2Div1H1">{result}</h1>
                </div>
                <div className="versusDiv2Div2">
                    <button className="versusDiv2Div2Btn" onClick={() => pick()}>PLAY AGAIN</button>
                </div>
            </div>
            <div className="versusDiv3">
                <div className="versusDiv3Div1">
                    <h2 className="versusDiv3Div1H2">THE HOUSE PICKED</h2>
                </div>
                <div className="versusDiv3Div2 ">
                    <button className={`circle ${styleClasse(ordiChoix)} ${pulseClasse("ordi")}`}><img className="versusDiv3Div2Img" src={choixImg(ordiChoix)} alt="" /></button>
                    
                </div>
            </div>
        </div>
        </>
    )
}