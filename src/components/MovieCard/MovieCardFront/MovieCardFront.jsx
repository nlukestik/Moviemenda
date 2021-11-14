import "./MovieCardFront.scss"

export default function MovieCardFront({movie, loading}) {
	const moviePoster = movie.poster_path

	return(
		<div 
			className="front"
			style={{ background: moviePoster && !loading ? 
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
						Genre
					</p>

					<div className="front__content__last">
						<p>Star</p>
						<p>Year</p>
					</div>
				</div>
			</div>
		</div>
	)
};
