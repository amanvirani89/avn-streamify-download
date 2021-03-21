import axios from '../axios';
import React, { useEffect, useState } from 'react';
import '../css/Rows.css';

function Rows({ movieTitle, fetchUrl }) {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    async function movieData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }

    movieData();
  }, []);
  console.log(Movies);

  return (
    <div className="movie-group">
      <div className="movie-title">
        <h2>{movieTitle}</h2>
      </div>
      <div className="movie-data">
        {Movies.map(
          (movie) =>
            movie.poster_path && (
              <img
                key={movie.id}
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={
                  movie.title ||
                  movie.original_title ||
                  movie.name ||
                  movie.original_name
                }
              />
            )
        )}
      </div>
      {/* <div className="movie-data">
        {Movies.map((movie) => (
          <h2>{movie.vote_average}</h2>
        ))}
      </div> */}
    </div>
  );
}

export default Rows;
