// IMPORTS
import { useState } from "react";
import './jeu.css'
import feuille from "/src/assets/images/icon-paper.svg"
import ciseaux from "/src/assets/images/icon-scissors.svg"
import pierre from "/src/assets/images/icon-rock.svg"
import triangle from "/src/assets/images/bg-triangle.svg"
export {ciseaux}
export {pierre}
export {feuille}

// FONCTIONS ETC
export default function Jeu({pick}) {
    
    return(
        <>
        <div className="divJeu">
            <div className="jeuDiv1">
                    <img className="jeuDiv1Img" src={triangle} alt="" />
            </div>

            <div className="jeuDiv2">
                <div className="">
                    <button className="bouton1 feuilleStyle outset1" onClick={()=> pick("feuille")}>
                    <img className="jeuDiv2Img1" src={feuille} alt="" />
                </button>
                </div>
                <div className="outset2">   
                    <button className="bouton2 ciseauxStyle" onClick={()=> pick("ciseaux")}>
                    <img className="jeuDiv2Img2" src={ciseaux} alt="" />
                </button>

                </div>
                
            </div>

            <div className="jeuDiv3 outset3">
                <button className="bouton3 pierreStyle" onClick={()=> pick("pierre")}>
                    <img className="jeuDiv3Img" src={pierre} alt="" />
                </button>
            </div>
                
                
        </div>
        </>
    )
}