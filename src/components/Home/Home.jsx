import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Movies from "../Movies/Movies";
import VideoFilter from "../VideoFilter/VideoFilter";
import { useEffect } from "react";
import { loadMoviesData } from "../../Axios/axios";
import { useState, useRef } from "react";
import Searchbox from "../Searchbox/Searchbox";
import MovieContent from ".././MovieContent/MovieContent";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import ScrollDown from "../ScrollDown/ScrollDown";
import Navbar from "../Navbar/Navbar";
import Loading from "../../assets/loading.gif";

function Home() {
  // const { searchMoviesResult } = useContext(MovieContext);

  const [movieItem, setMovieItem] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [filterResult, setFilterResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const sortMovies = ["categories", "description", "title", "duration"];

  useEffect(() => {
    setIsLoading(true);
    loadMoviesData()
      .then((json) => {
        setMovieItem(json);

        return json;
      })
      .then((json) => {
        setSearchResult(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="home__filter__container">
        <Navbar />
        <Searchbox movieItem={movieItem} setSearchResult={setSearchResult} />

        <VideoFilter />
      </div>
      <div className="home__container">
        {/* <MovieCard searchResult={searchResult} /> */}
        {isLoading ? (
          <Box sx={{ display: "block", width: "100%" }}>
          
          </Box>
        ) : (
          <MovieContent searchResult={searchResult} />
        )}
      </div>
    </>
  );
}

export default Home;
