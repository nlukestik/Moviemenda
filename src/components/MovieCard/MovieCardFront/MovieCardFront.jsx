import "./MovieCardFront.scss"

export default function MovieCardFront() {
	return(
		<div className="front">
			<div className="front__bottombg">
				<div className="front__content">
					<h2 className="front__content__title">
						Title
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
