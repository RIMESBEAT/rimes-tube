import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Movies from "../Movies/Movies";
import VideoFilter from "../VideoFilter/VideoFilter";
import { useEffect } from "react";
import { getMovies } from "../../Axios/axios";
import { useState } from "react";
import Searchbox from "../Searchbox/Searchbox";
import MovieContent from "../MovieContent/MovieContent";

function Home() {
  const [movieItem, setMovieItem] = useState([]);
  const [searchResult, setSearchResult] = useState();

    useEffect(() => {
      // loadMovieData();

      getMovies()
        .then((data) => {
          setMovieItem(data);
          return data;
        })
        .then((data) => {
          setSearchResult(data);
        });
    }, []);
    console.log(searchResult);
  return (
    <>
      <Sidebar />
      <VideoFilter />
      <Searchbox movieItem={movieItem} setSearchResult={setSearchResult} />

      <div className="home__container">
        {/* <Movies/> */}
        {/* <MovieCard /> */}
        <MovieContent searchResult={searchResult}/>
      </div>
    </>
  );
}

export default Home;
