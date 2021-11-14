import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdbApi";

export function useMovieDetails(movieID) {
	const [ details, setDetails ] = useState()
	const [ loading, setLoading ] = useState(true)
	
	async function movieDetails(id) {
		try {
			const data = await getMovieDetails(id)
			setDetails(data)
		} 
		catch (err) {
			alert(err)
		}
		finally{
			setLoading(false)
		}
	}
	
	useEffect(() => {
		movieDetails(movieID.id)
	})

	return {details, loading}
}