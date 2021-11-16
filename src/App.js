import { useState } from "react"
import APIAttribution from "./components/APIAttribution/APIAttribution";
import MovieCard from "./components/MovieCard/MovieCard";
import { useMovieRecommendation } from "./hooks/useMovieRecommendation";
import "./App.scss"
import Emoji from "./components/Emoji";

function App() {
  const [count, setCount] = useState(0)
  const [cardFront, setCardFront] = useState(true)
  const {movieID, loading} = useMovieRecommendation(count)
  

  const handleDice = () => {
    setCardFront(true)
    setCount(count+1)
  }
  
  return (
    <div className="root">
      {loading ? 
        <></>
        : <MovieCard id={movieID} isCardFront={cardFront} setToCardFront={setCardFront} />
      }

      <div className="buttons">
        <button className="buttons__dice" onClick={handleDice}><Emoji symbol="🎲" /></button>
      </div>

      <div className="attr">
        <APIAttribution />
      </div>
    </div>
  )
}

export default App;
