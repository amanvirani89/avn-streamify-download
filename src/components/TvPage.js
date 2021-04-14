import React from 'react';
import { auth } from '../firebase';
import requests from '../Requests';
import Footer from './Footer';
import Rows from './Rows';

function TvPage() {
  return (
    <div className="displaysection">
      <Rows
        movieTitle="Trending TV Shows"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Rows
        movieTitle="Popular TV Shows"
        fetchUrl={requests.fetchPopularTvShows}
      />
      <Rows movieTitle="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Footer />
    </div>
  );
}

export default TvPage;
