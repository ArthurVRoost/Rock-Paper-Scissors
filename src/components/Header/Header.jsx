import { useState } from "react";
import './header.css'
import photoHeader from "../../assets/images/logo.svg"

export default function Header() {
    const [count, setCount] = useState(0)
    return(
        <>
        <div className="divHeader">
            <div className="headerDiv1">
                <img className="headerImg" src={photoHeader} alt="" />
            </div>
            
            <div className="headerDiv2">
                <p className="headerP1">SCORE</p>
                <p className="headerP2">{count}</p>
            </div>
        </div>
        </>
    )
}