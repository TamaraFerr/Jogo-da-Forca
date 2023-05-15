import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import "./styles/reset.css"
import "./styles/style.css"
import palavras from "./palavras"
import { useState } from "react";

function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [error, setError] = useState(0)
  const [sortedWord, setSortedWord] = useState([])
  const [gameWord, setGameWord] = useState([])
  const [pressedWord, setPressedWord] = useState(alfabeto)
  const [color, setColor] = useState("default")

  function startGame(){
    setError(0)
    setPressedWord([])
    setColor("default")
    sortWord()
  }

  function sortWord(){
    const index = math.floor(math.random() * word.length)
    const word = palavras[index]
    const arrayFromWord = word.split("")
    setSortedWord(arrayFromWord)

  }

  function selectLetter(letra){
    console.log("Letra selecionada!")
    setPressedWord([...pressedWord, letra])

    if(pressedWord.includes(letra)){
      rightWord(letra)
    } else {
      wrongWord(letra)
    }

  }

  function rightWord(letra){
    const novaGameWord = [...gameWord]

    pressedWord.forEach((letter, i) => {
      if(letter === letra){
         novaGameWord[i] = letra
     }
   })

    setGameWord(novaGameWord)
    
    if(!pressedWord.includes(" _")){
      setColor("right")
    }

    finished()
  }
  
  function wrongWord(letra){
    const newError = error + 1
    setError(newError)

    if(newError === 6){
      setColor("wrong")
    }

    finished()
  }

  function finished(){
    setGameWord(sortedWord)
    setPressedWord(alfabeto)
  }

  return (
    <div>
      <Jogo 
        error={error}
        startGame={startGame}
        color={color}
        gameWord={gameWord}
        
      />
      <Letras 
        pressedWord={pressedWord}
        selectLetter={selectLetter}
      />
    </div>
  )
}

export default App;
