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
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
