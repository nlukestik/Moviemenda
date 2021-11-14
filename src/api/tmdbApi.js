export async function getTopRatedMovies() {
	const random = Math.floor(Math.random() * 30) + 1

	try {
		const res = await fetch(`${window.location.protocol}//api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=${random}`) 
		const data = await res.json()
		return data?.results
	} 
	catch (err) {
		alert(err)
	}
}