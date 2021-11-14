import "./MovieCardBack.scss"

export default function MovieCardBack({movie, cast}) {

	return(
		<div className="back">
			<div className="back__content">
				<h3 className="back__content__description-t">
					Description
				</h3>
				<p className="back__content__description-c">
					{movie.overview}
				</p>

				<h3 className="back__content__cast-t">
					Cast
				</h3>

				<p className="back__content__cast-c">
					{/* {cast.map((act, i, arr) => 
						act.name + (arr.length - 1 === i) ? "" : ", "
					)} */}
				</p>
			</div>
		</div>
	)
};
