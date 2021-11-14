import { useEffect, useState } from "react";
import { getMovieCast } from "../api/tmdbApi";

export function useMovieCast(movieID) {
	const [ cast, setCast ] = useState()
	const [ loadingCast, setLoadingCast ] = useState(true)
	
	async function movieCast(id) {
		try {
			const data = await getMovieCast(id)
			setCast(data)
		} 
		catch (err) {
			alert(err)
		}
		finally{
			setLoadingCast(false)
		}
	}
	
	useEffect(() => {
		movieCast(movieID.id)
	})

	return {cast, loadingCast}
}