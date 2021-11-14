import { useEffect, useState } from "react"
import { getTopRatedMovies } from "../api/tmdbApi"

export function useMovieRecommendation() {
	const [ movieRecommendation, setMovieRecommendation ] = useState([])
	const [ loading, setLoading ] = useState(true)
	const random = Math.floor(Math.random() * 20)

	async function getRecommendation() {

		try {
			const movies = await getTopRatedMovies()
			setMovieRecommendation(movies[random])
		} 
		catch (err) {
			alert(err)
		}
		finally{
			setLoading(false)
		}
	}

	useEffect(() => {
		getRecommendation()
	})

	return {movieRecommendation, loading}
}