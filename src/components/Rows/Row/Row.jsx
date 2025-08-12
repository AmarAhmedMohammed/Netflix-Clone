import React, { useEffect, useState } from "react";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const PLACEHOLDER_IMAGE = "https://via.placeholder.com/200x300?text=No+Image";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results || []); 
        setError(null); 
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
        setError("Failed to load movies. Please try again later.");
      }
    }

    fetchMovies();
  }, [fetchUrl]); 

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          // console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          // console.log(urlParams);
          // console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <section className="row-container">
        <h3>{title}</h3>
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="poster-image-container">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div className="poster-image" key={movie.id}>
                  <img
                    onClick={() => handleClick(movie)}
                    src={`${BASE_IMAGE_URL}${
                      isPoster ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.title || movie.name || "Movie poster"}
                    // onError={(e) => {
                    //   e.target.src = PLACEHOLDER_IMAGE;
                    // }}
                    loading="lazy" 
                  />
                </div>
              ))
            ) : (
              <p>No movies available</p>
            )}
          </div>
        )}
      </section>
      <div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
