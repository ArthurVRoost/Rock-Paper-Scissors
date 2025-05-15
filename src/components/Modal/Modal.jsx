import { useState } from "react";
import "./modal.css"
import photoModal from "/src/assets/images/image-rules.svg"
export default function Modal() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () =>{
        setIsOpen(prev=>!prev)
    }
    return(
        <>
        <div className="divModal">
            <p className="modalP" onClick={toggleModal}>RULES</p>
        </div>
        {isOpen &&(
              <div className="modalOverlay" onClick={toggleModal}>
                <div className="modalContent" >
                    <img className="modalImg" src={photoModal} alt=""/>
                 </div>
             </div>
        )}
       
        </>
    )
}