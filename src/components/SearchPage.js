import React, { useState } from 'react';
import requests from '../Requests';
import Rows from './Rows';
import '../css/SearchPage.css';

function SearchPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="searchPage">
      <div className="searchInput">
        <input
          type="text"
          name="searchInput"
          placeholder="Search here"
          id="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {search == '' ? (
        <div className="loading">Loading... {search}</div>
      ) : (
        <div className="rows">
          <Rows
            movieTitle="Searched Movies"
            fetchUrl={requests.fetchSearched + '&query=' + search}
          />
        </div>
      )}
      {/* <Rows
        movieTitle={`Showing Related Search of ${searchQuery}`}
        fetchUrl={requests.fetchSearched + '&query=' + searchQuery}
      /> */}
    </div>
  );
}

export default SearchPage;
