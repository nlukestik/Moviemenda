import { useEffect, useState } from "react"
import { getTopRatedMovies } from "../api/tmdbApi"

export function useMovieRecommendation(count) {
	const [ movieID, setMovieID ] = useState()
	const [loading, setLoading] = useState(true)
	const random = Math.floor(Math.random() * 20)

	async function getRecommendation() {

		try {
			const movies = await getTopRatedMovies()
			setMovieID(movies[random].id)
		} 
		catch (err) {
			alert(err)
		}
		finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getRecommendation()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count])

	return {movieID, loading}
}