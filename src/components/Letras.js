export default function Letras({pressedWord, selectedLetter}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    return(
        <div className="letters">
            {alfabeto.map(letra => (
                <button className="letter" 
                    key={letra}
                    data-test="letter" 
                    onClick={() => selectedLetter(letra)}
                    style={{textTransform:'uppercase'}}
                    disabled={pressedWord.includes(letra)}
                    >
                        {letra}
                </button>
            ))}
        </div>
    )
}