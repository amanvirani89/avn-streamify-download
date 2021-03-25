import axios from '../axios';
import React, { useState, useEffect } from 'react';
import '../css/Banner.css';

function Banner({ fetchUrl }) {
  const [Banner, setBanner] = useState();

  useEffect(() => {
    async function showBanner() {
      const response = await axios.get(fetchUrl);
      setBanner(response.data.results);
      return response;
    }
    showBanner();
  }, []);
  console.log(Banner);

  return (
    <div>
      <header className="banner">
        {Banner.backdrop_path && (
          <img
            key={Banner.id}
            src={`http://image.tmdb.org/t/p/original/${Banner.backdrop_path}`}
            alt={
              Banner.name ||
              Banner.original_name ||
              Banner.title ||
              Banner.original_title
            }
          />
        )}
      </header>
    </div>
  );
}

export default Banner;
