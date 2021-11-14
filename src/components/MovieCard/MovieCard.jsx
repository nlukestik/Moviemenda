import { useState } from "react";
import MovieCardFront from "./MovieCardFront/MovieCardFront";
import MovieCardBack from "./MovieCardBack/MovieCardBack";
import "./MovieCard.scss"

export default function MovieCard() {
	const [ isFlipped, setIsFlipped ] = useState(false)
	

	const handleFlip = () => {
    setIsFlipped(!isFlipped)
  };

	return(
		<div className={`card ${isFlipped ? "flipped" : ""}`}>
			
			<div className="card__front" onClick={handleFlip}>
				{/* <MovieCardFront movie={movieRecommendation} loading={loading} /> */}
			</div>

			<div className="card__back" onClick={handleFlip}>
				{/* <MovieCardBack movie={movieRecommendation} loading={loading} /> */}
			</div>
			
		</div>
	)
};
