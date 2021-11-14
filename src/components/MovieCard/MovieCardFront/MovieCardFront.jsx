import "./MovieCardFront.scss"

export default function MovieCardFront({movie}) {
	const moviePoster = movie ? movie.poster_path : null

	return(
		<div 
			className="front"
			style={{ background: moviePoster ? 
				`url("https://image.tmdb.org/t/p/original/${moviePoster}") center/cover no-repeat`
				: "#0d253f"
			}}
		>
			<div className="front__bottombg">
				<div className="front__content">
					<h2 className="front__content__title">
						{movie.title}
					</h2>
					<p className="front__content__genre">
						{movie.genres[0].name}
					</p>

					<div className="front__content__last">
						<p>{movie.vote_average}</p>
						<p>{movie.release_date.substring(0,4)}</p>
					</div>
				</div>
			</div>
		</div>
	)
};
