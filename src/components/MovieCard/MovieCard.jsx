/* eslint-disable no-lone-blocks */
import { Avatar, LinearProgress, Pagination } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import CircularProgress from "@mui/material/CircularProgress";
// import TXXX_DATA from "../../TXXX_DATA";
import Movies from "../Movies/Movies";
import ReactPaginate from "react-paginate";
import "./MovieCard.css";
import { TXXX_DATA } from "../../TXXX_DATA";

function MovieCard() {
    // const vidoeData = async () => await fetch(  "TXXX_DATA.json");
  const [movieItem, setMovieItem] = useState(TXXX_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const { selectMovies, moviesOrder } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const [searchMovies, setSearchMovies] = useState();
  const moviesPerPage = 10;
  const pagesVisited = page * moviesPerPage;

  // const movieFetchBox = async () => {
  //   setIsLoading(true);
  //   await fetch(
  //     `https://www.eporner.com/api/v2/video/search/?query=${selectMovies}&per_page=10000&page=80&thumbsize=big&order=${moviesOrder}&gay=0&lq=1&format=json`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setMovieItem(data));
  //   setIsLoading(false);
  // };
  // const vidoeData = async () => TXXX_DATA;
  // const movieFetchBox = async () => {
  //   setIsLoading(true);
  //   await fetch( TXXX_DATA)
  //     .then((res) => res.json())
  //     .then((data) => setMovieItem(data));
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   setIsLoading(true);
  //   movieFetchBox()
  //   setIsLoading(false);
  // }, []);
  console.log(movieItem)
  

  
  // const [pages, setPages] = useState(moviesOrder)
  const pageCount = Math.ceil(movieItem.length/10);

  const searchHandler = () => {
    return (
      movieItem.videos &&
      movieItem.videos.filter(
        (movies) =>
          movies.title.toLowerCase().includes(searchMovies) ||
          movies.keywords.toLowerCase().includes(searchMovies)
      )
    );
  };

  const displayMovies =
    movieItem.length > 0 && movieItem.slice(pagesVisited, pagesVisited + moviesPerPage) 
    .map((movies) => <Movies {...movies} key={movies.id} />);


  const pagesHandler = (e, k) => {
    setPage(k);
  };
 
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  return (
    <>
      <div className="movie__container">
      <input type="search" onChange={searchHandler()} />
        <div className="movie__display">
          {isLoading ? <CircularProgress color="secondary" /> :(displayMovies)}

          {/* <Movies {...movieItem} key={ movieItem}  /> */}
        </div>

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
