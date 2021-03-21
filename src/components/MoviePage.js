import React from 'react';
import Rows from './Rows';
import requests from '../Requests';
import { auth } from '../firebase';

function MoviePage() {
  return (
    <div>
      <button onClick={() => auth.signOut()}>SignOut</button>
      <Rows movieTitle="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows movieTitle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows movieTitle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows
        movieTitle="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
    </div>
  );
}

export default MoviePage;
