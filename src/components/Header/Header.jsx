import { useState } from "react";
import './header.css'
import photoHeader from "../../assets/images/logo.svg"

export default function Header() {
    return(
        <>
        <div>
            <div><img src={photoHeader} alt="" /></div>
            <div></div>
        </div>
        </>
    )
}