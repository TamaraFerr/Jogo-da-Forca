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

  function finished(){
    setGameWord(sortedWord)
    setPressedWord(alfabeto)
  }

  function sortWord(){
    const index = Math.floor(Math.random() * palavras.length)
    const word = palavras[index]
    console.log(word)

    const arrayFromWord = word.split("")
    setSortedWord(arrayFromWord)

    let espaco = []
    arrayFromWord.forEach(() => espaco.push(" _"))
    setGameWord(espaco)
  }

  function selectedLetter(letra){
    console.log(pressedWord)
    setPressedWord([...pressedWord, letra])

    if(pressedWord.includes(letra)){
      rightWord(letra)
    } else {
      wrongWord()
    }

  }

  function rightWord(pressWord){
    const novaGameWord = [...gameWord]

    sortedWord.forEach((letter, i) => {
      if(letter === pressWord){
        novaGameWord[i] = pressWord
      }
   })

    setGameWord(novaGameWord)
    
    if(!novaGameWord.includes(" _")){
      setColor("right")
      finished()
    }
  }
  
  function wrongWord(letra){
    const newError = error + 1
    setError(newError)

    if(newError === 6){
      setColor("wrong")
      finished()
    }
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
        selectedLetter={selectedLetter}
      />
    </div>
  )
}

export default App;
