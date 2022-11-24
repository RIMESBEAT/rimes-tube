/* eslint-disable no-lone-blocks */
import { Avatar, LinearProgress, Pagination } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Movies from "../Movies/Movies";
import ReactPaginate from "react-paginate";
import "./MovieCard.css";
import { Box } from "@mui/system";

function MovieCard() {
  const [movieItem, setMovieItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movies, moviesOrder } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const moviesPerPage = 10;
  const pagesVisited = page * moviesPerPage;

  const movieFetchBox = async () => {
    setIsLoading(true);
    await fetch(
      `https://www.eporner.com/api/v2/video/search/?query=${movies}&per_page=900&page=80&thumbsize=big&order=longest&gay=1&lq=1&format=json`
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
  // const [pages, setPages] = useState(moviesOrder)
  const pageCount = Math.ceil(movieItem.page);

  const displayMovies =
    movieItem.videos &&
    movieItem.videos
      .slice(pagesVisited, pagesVisited + moviesPerPage)
      .map((movies) => <Movies {...movies} key={movies.id} />);

  // const pagesHandler = (e, k) => {
  //   setPage(k);
  // };

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  return (
    <>
      <div className="movie__container" key={movieItem.id}>
        <div className="movie__display">{displayMovies}</div>
        {/* <div className=""> */}
        {/* </div> */}
        {/* {movieItem.videos &&
          movieItem.videos.map((movies) => (
            <Movies {...movies} key={movies.id} />
          ))} */}

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          color="primary"
          onPageChange={changePage}
          containerClassName={"paginationContainer"}
          previousClassName={"prevBtn"}
          nextClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
  // }
}

export default MovieCard;
