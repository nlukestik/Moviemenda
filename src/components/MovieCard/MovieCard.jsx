import { useState } from "react";
import MovieCardFront from "./MovieCardFront/MovieCardFront";
import MovieCardBack from "./MovieCardBack/MovieCardBack";
import "./MovieCard.scss"
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useMovieCast } from "../../hooks/useMovieCast";

export default function MovieCard(id) {
	const [ isFlipped, setIsFlipped ] = useState(false)
	const {details, loading} = useMovieDetails(id)
	// const {cast, loadingCast} = useMovieCast(id)
	
	const handleFlip = () => {
    setIsFlipped(!isFlipped)
  };

	return(

		loading ? 
			<></> 
		: 
			<div className={`card ${isFlipped ? "flipped" : ""}`}>
				<div className="card__front" onClick={handleFlip}>
					<MovieCardFront movie={details}  />
				</div>
				<div className="card__back" onClick={handleFlip}>
					<MovieCardBack movie={details} />
				</div>
			</div>

	)
};
