import axios from '../axios';
import React, { useState, useEffect } from 'react';
import '../css/Banner.css';

function Banner({ fetchUrl }) {
  const [Banner, setBanner] = useState();

  useEffect(() => {
    async function showBanner() {
      const response = await axios.get(fetchUrl);
      setBanner(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    showBanner();
  }, []);

  // console.log(Banner);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${
          Banner?.backdrop_path || Banner?.poster_path
        }')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {Banner?.title ||
            Banner?.name ||
            Banner?.original_name ||
            Banner?.original_title}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
