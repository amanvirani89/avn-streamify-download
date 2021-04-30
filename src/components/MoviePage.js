import React from 'react';
import Rows from './Rows';
import requests from '../Requests';
import { auth } from '../firebase';
import Footer from './Footer';

function MoviePage() {
  return (
    <div className="displaysection">
      {/* <Rows
        movieTitle="Searched Movies"
        fetchUrl={requests.fetchSearched + '&query=spider'}
      /> */}
      <Rows movieTitle="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows movieTitle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows movieTitle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows
        movieTitle="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Footer />
    </div>
  );
}

export default MoviePage;
