import React from 'react';
import { auth } from '../firebase';
import requests from '../Requests';
import Rows from './Rows';

function TvPage() {
  return (
    <div>
      <button onClick={() => auth.signOut()}>SignOut</button>
      <Rows
        movieTitle="Trending TV Shows"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Rows
        movieTitle="Popular TV Shows"
        fetchUrl={requests.fetchPopularTvShows}
      />
    </div>
  );
}

export default TvPage;
