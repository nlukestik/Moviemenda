import { useState } from "react"
import APIAttribution from "./components/APIAttribution/APIAttribution";
import MovieCard from "./components/MovieCard/MovieCard";
import { useMovieRecommendation } from "./hooks/useMovieRecommendation";
import "./App.scss"

function App() {
 
  const [count, setCount] = useState(0)
  const {movieID, loading} = useMovieRecommendation(count)
  

  const handleDice = () => {
    
    setCount(count+1)
  }
  
  return (
    <>
      <button onClick={handleDice}>+</button>
      {loading ? 
        <></>
        : <MovieCard id={movieID} />
      }
      <APIAttribution />
    </>
  )
}

export default App;
