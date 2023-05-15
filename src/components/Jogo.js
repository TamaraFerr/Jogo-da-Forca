import { useState } from "react"
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"
 
export default function Jogo(){
    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    const [error, setError] = useState(0)

    function startGame(){
        setError(0)
    }


    return(
        <div className="container">
            <img src={imagens[error]} className="forca" data-test="game-image"/>

            <div className="right-collum">
                <button className="botao" data-test="choose-word" >Escolher Palavra</button>
                <p className="word" data-test="word">AKSDKADKSFSD</p>
            </div>

        </div>
    )
}