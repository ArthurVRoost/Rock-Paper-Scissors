import { useState } from "react";
import './jeu.css'
import feuille from "/src/assets/images/icon-paper.svg"
import ciseaux from "/src/assets/images/icon-scissors.svg"
import pierre from "/src/assets/images/icon-rock.svg"
import triangle from "/src/assets/images/bg-triangle.svg"
export default function Jeu() {
    return(
        <>
        <div className="divJeu">
            <div className="jeuDiv1">
                    <img className="jeuDiv1Img" src={triangle} alt="" />
            </div>

            <div className="jeuDiv2">
                <button className="bouton1">
                    <img className="jeuDiv2Img1" src={feuille} alt="" />
                </button>
                <button className="bouton2">
                    <img className="jeuDiv2Img2" src={ciseaux} alt="" />
                </button>
            </div>

            <div className="jeuDiv3">
                <button className="bouton3">
                    <img className="jeuDiv3Img" src={pierre} alt="" />
                </button>
            </div>
                
                
        </div>
        </>
    )
}