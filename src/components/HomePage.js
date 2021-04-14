import React from 'react';
import { auth } from '../firebase';
import requests from '../Requests';
import Banner from './Banner';
import Rows from './Rows';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="displaysection">
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Rows movieTitle="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Rows movieTitle="Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Rows movieTitle="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows movieTitle="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows movieTitle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows movieTitle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows
        movieTitle="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Rows movieTitle="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default HomePage;
