const API_KEY = import.meta.env.VITE_API_KEY;

const request = {

  
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10762`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // fetchAdventureMovie: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  // fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  // fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  // fetchFantasyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  // fetchWarMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
};

export default request;
