import { useState } from "react";
import './jeu.css'
import feuille from "/src/assets/images/icon-paper.svg"
import ciseaux from "/src/assets/images/icon-scissors.svg"
import pierre from "/src/assets/images/icon-rock.svg"
import triangle from "/src/assets/images/bg-triangle.svg"
export {ciseaux}
export {pierre}
export {feuille}
export default function Jeu({pick}) {
    return(
        <>
        <div className="divJeu">
            <div className="jeuDiv1">
                    <img className="jeuDiv1Img" src={triangle} alt="" />
            </div>

            <div className="jeuDiv2">
                <button className="bouton1" onClick={()=> pick("feuille")}>
                    <img className="jeuDiv2Img1" src={feuille} alt="" />
                </button>
                <button className="bouton2" onClick={()=> pick("ciseaux")}>
                    <img className="jeuDiv2Img2" src={ciseaux} alt="" />
                </button>
            </div>

            <div className="jeuDiv3">
                <button className="bouton3" onClick={()=> pick("pierre")}>
                    <img className="jeuDiv3Img" src={pierre} alt="" />
                </button>
            </div>
                
                
        </div>
        </>
    )
}