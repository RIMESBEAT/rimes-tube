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
import MovieContent from ".././MovieContent/MovieContent";
import Banner from "../Banner/Banner";
import axios from "axios";
import { AllCategories } from "../../DATA__OBJECT";

function Home() {
  const [movieItem, setMovieItem] = useState();
  const [searchResult, setSearchResult] = useState();
  const [filterResult, setFilterResult] = useState();

  // const handleSort = async (e) => {
  //   let value = e.target.value;
  //   setFilterResult(value);
  //   return await axios
  //     .get(`http://localhost:5000/videos?_sort=${value}&_order=asc`)
  //     .then((response) => {
  //       setMovieItem(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const sortMovies = ["categories", "description", "title", "duration"];
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

  // useEffect(() => {
  //   fetch(
  //     "https://txxx.com/admin/feeds/promo/?promo=40959&feed_format=csv&screenshot_format=288x162&limit=10000&csv_separator=%7C"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setFilterResult(data));
  // });
  // console.log(filterResult);
  // useEffect(() => {
  //   handleSort()
  // })

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   return await axios
  //     .get(`http://localhost:5000/videos?q=${searchMovies}`)
  //     .then((response) => {
  //       setMovieItem(response.data);
  //       setSearchResult("");

  //   })
    // .catch((err) => console.log(err));
  // };


  // console.log("data", searchResult);
  return (
    <>
      <VideoFilter />
      <Searchbox movieItem={movieItem} setSearchResult={setSearchResult} />

      <div className="home__container">
        {/* <Movies/> */}
        {/* <MovieCard /> */}
        <MovieContent searchResult={searchResult} />
        <h1>{movieItem?.title}</h1>
      </div>
    </>
  );
}

export default Home;
