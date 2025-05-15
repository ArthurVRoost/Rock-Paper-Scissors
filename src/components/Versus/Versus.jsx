import { useState } from "react";
import "./versus.css"
import { ciseaux, feuille, pierre } from "../Jeu/Jeu";

export default function Versus({pick}) {
    return(
        <>
        <div>
            <div>
                <div><h2>YOU PICKED</h2></div>
                <div><img src={ciseaux} alt="" /></div>
            </div>
            <div>
                <div></div>
                <div><button onClick={pick}>PLAY AGAIN</button></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    )
}