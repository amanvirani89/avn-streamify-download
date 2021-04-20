import axios from '../axios';
import React, { useEffect, useState } from 'react';
import '../css/Rows.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Rows({ movieTitle, fetchUrl }) {
  const [Movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function movieData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }

    movieData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      // console.log(movie);
      movieTrailer(
        movie.name || movie.title || movie.original_name || movie.original_title
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          // console.log(urlParams);
          // console.log(trailerUrl);
          // console.log(url);
        })
        .catch((error) => console.log(error));
    }
  };

  function truncateOverview(str, a) {
    return str?.length > a ? str.substr(0, a - 1) + '...' : str;
  }
  // console.log(Movies);

  return (
    <div className="movie-group">
      <div className="movie-title">
        <h2>{movieTitle}</h2>
      </div>
      <div className="movie-data">
        {Movies.map(
          (movie) =>
            movie.poster_path && (
              <div className="movie-card">
                <div className="card-container">
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
                  {/* {console.log(movie)} */}

                  <div
                    className="movie-over"
                    onClick={() => handleClick(movie)}
                  >
                    <div className="over-text">
                      <h2>Overview</h2>
                      <span>{truncateOverview(movie.overview, 200)}</span>
                    </div>
                  </div>
                </div>

                <div className="movie-description">
                  <div>
                    {' '}
                    {movie.title ||
                      movie.original_title ||
                      movie.name ||
                      movie.original_name}
                  </div>
                  <div>
                    <span
                      className={` ${
                        movie.vote_average > 7 ? 'voting-green' : 'voting-red'
                      } voting`}
                    >
                      {movie.vote_average}
                    </span>
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
}

export default Rows;
