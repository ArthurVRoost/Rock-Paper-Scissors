// IMPORTS
import { useState } from "react";
import './header.css'
import photoHeader from "../../assets/images/logo.svg"

// FONCTIONS ETC
export default function Header({score}) {
    return(
        <>
        <div className="divHeader">
            <div className="headerDiv1">
                <img className="headerImg" src={photoHeader} alt="" />
            </div>
            
            <div className="headerDiv2">
                <p className="headerP1">SCORE</p>
                <p className="headerP2">{score}</p>
            </div>
        </div>
        </>
    )
}