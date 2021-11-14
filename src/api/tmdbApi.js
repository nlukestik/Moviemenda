export async function getTopRatedMovies() {
	const random = Math.floor(Math.random() * (31 - 1)) + 1

	try {
		const res = await fetch(`${window.location.protocol}//api.themoviedb.org/3/movie/top_rated?api_key=b483614e46314b9eba9858d675749194&page=${random}`) 
		const data = await res.json()
		return data?.results
	} 
	catch (err) {
		alert(err)
	}
}

export async function getMovieDetails(id) {
	try {
		const res = await fetch(`${window.location.protocol}//api.themoviedb.org/3/movie/${id}?api_key=b483614e46314b9eba9858d675749194`)	
		const data = await res.json()
		return data
	} 
	catch (err) {
		alert(err)
	}	
}

export async function getMovieCast(id) {
	try {
		const res = await fetch(`${window.location.protocol}//api.themoviedb.org/3/movie/${id}/credits?api_key=b483614e46314b9eba9858d675749194`)	
		const data = await res.json()
		return data?.cast
	} 
	catch (err) {
		alert(err)
	}	
}

