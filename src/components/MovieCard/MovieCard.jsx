import { useState } from "react";
import MovieCardFront from "./MovieCardFront/MovieCardFront";
import MovieCardBack from "./MovieCardBack/MovieCardBack";
import "./MovieCard.scss"
import { useMovieDetails } from "../../hooks/useMovieDetails";
// import { useMovieCast } from "../../hooks/useMovieCast";

export default function MovieCard({id, isCardFront, setToCardFront}) {
	const {details, loading} = useMovieDetails(id)
	// const {cast, loadingCast} = useMovieCast(id)
	
	const handleFlip = () => {
    setToCardFront(!isCardFront)
  };

	return(

		loading ? 
			<></> 
		: 
			<div className={`card ${!isCardFront ? "flipped" : ""}`}>
				<div className="card__front" onClick={handleFlip}>
					<MovieCardFront movie={details}  />
				</div>
				<div className="card__back" onClick={handleFlip}>
					<MovieCardBack movie={details} />
				</div>
			</div>

	)
};
