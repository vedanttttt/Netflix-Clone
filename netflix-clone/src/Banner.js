import axios from "./axios";
import requests from "./requests";
import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchdetails() {
      const request = await axios.get(requests.fetchTopRated);
      const obj = request.data.results;
      console.log(obj);
      const num = Math.floor(Math.random() * (obj.length - 1));
      setMovie(obj[num]);
      console.log(movie);
      //console.log("hello ji");
    }
    fetchdetails();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
