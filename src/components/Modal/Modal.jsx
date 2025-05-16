// IMPORTS
import { useState } from "react";
import "./modal.css"
import photoModal from "/src/assets/images/image-rules.svg"
import croix from "/src/assets/images/icon-close.svg"

// FONCTIONS
export default function Modal() {
    // CONST 
    const [isOpen, setIsOpen] = useState(false)
    // TOGGLE
    const toggleModal = () =>{
        setIsOpen(ferme=>!ferme)
    }
    return(
        <>
        <div className="divModal">
            <p className="modalP" onClick={toggleModal}>RULES</p>
        </div>
        {/* EVALUATION CONDITIONELLE */}
        {isOpen &&(
              <div className="modalOverlay" onClick={toggleModal} >
                <div className="modalContent"  >
                    <div className="divRules" >
                        <p className="rulesP">RULES</p>
                        <img className="rulesImg" src={croix} alt="" />
                    </div>
                    
                    <img className="modalImg" src={photoModal} alt=""/>
                </div>
             </div>
        )}
       
        </>
    )
}