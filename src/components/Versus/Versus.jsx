import { useState } from "react";
import "./versus.css"
import { ciseaux, feuille, pierre } from "../Jeu/Jeu";

export default function Versus({pick}) {
    return(
        <>
        <div className="divVersus">
            <div className="versusDiv1">
                <div className="versusDiv1Div1">
                    <h2 className="versusDiv1Div1H2">YOU PICKED</h2>
                </div>
                <div className="versusDiv1Div2">
                    <button className="bouton2Versus"> <img className="versusDiv1Div2Img" src={ciseaux} alt="" /></button>
                    
                </div>
            </div>
            <div className="versusDiv2">
                <div className="versusDiv2Div1">
                    <h1 className="versusDiv2Div1H1">YOU LOSE</h1>
                </div>
                <div className="versusDiv2Div2">
                    <button className="versusDiv2Div2Btn" onClick={pick}>PLAY AGAIN</button>
                </div>
            </div>
            <div className="versusDiv3">
                <div className="versusDiv3Div1">
                    <h2 className="versusDiv3Div1H2">THE HOUSE PICKED</h2>
                </div>
                <div className="versusDiv3Div2">
                    <button className="bouton3Versus"><img className="versusDiv3Div2Img" src={pierre} alt="" /></button>
                    
                </div>
            </div>
        </div>
        </>
    )
}