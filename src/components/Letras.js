export default function Letras({pressedword, selectedLetter}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    return(
        <ul className="letters">
            {alfabeto.map(letra => (
                <li className="letter" 
                    key={letra}
                    data-test="letter" 
                    onClick={() => selectedLetter(letra)}
                    style={{textTransform:'uppercase'}}
                    disabled={pressedword.includes(letra)}
                    >
                        {letra}
                </li>
            ))}
        </ul>
    )
}