/* eslint-disable no-lone-blocks */
import { Avatar, Pagination } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import "./MovieCard.css";
import Movies from "../Movies/Movies";

function MovieCard() {
  const [movieItem, setMovieItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movies, moviesOrder } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const movieFetchBox = async () => {
    setIsLoading(true);
    await fetch(
      `https://www.eporner.com/api/v2/video/search/?query=${movies}&per_page=10&page=2&thumbsize=big&order=latest&gay=1&lq=1&format=json`
    )
      .then((res) => res.json())
      .then((data) => setMovieItem(data));
    setIsLoading(false);
  };
  useEffect(() => {
    movieFetchBox();
  }, [movies, moviesOrder]);
  console.log(movieItem);
  // const { id, title } = movieItem.videos;
  return (
    <div className="movie__container">
      {movieItem.videos &&
        movieItem.videos.map((movies) => <Movies {...movies} />)}
    </div>
  );
  // }
}

export default MovieCard;
