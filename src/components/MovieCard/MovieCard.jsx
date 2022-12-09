/* eslint-disable no-lone-blocks */
import { Avatar, LinearProgress, Pagination } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import CircularProgress from "@mui/material/CircularProgress";
import Movies from "../Movies/Movies";
import ReactPaginate from "react-paginate";
import "./MovieCard.css";
import axios from "axios";
import { getMovies} from "../../Axios/axios"
import Searchbox from "../Searchbox/Searchbox";

function MovieCard() {
  // const vidoeData = async () => await fetch(  "TXXX_DATA.json");
  const [movieItem, setMovieItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1);
  const [searchResult, setSearchResult] = useState();
  const [sortValue, setSortValue] = useState(" ");
  const moviesPerPage = 30;
  const pagesVisited = page * moviesPerPage;

const loadMoviesData = async () => {
  fetch(`http://localhost:5000/videos`)
    .then((res) => res.json())
    .then((data) => {
      setIsLoading(true);
      setMovieItem(data);
      setIsLoading(false);
    })
    
};

useEffect(() => {
  loadMoviesData();
}, []);


  
const pageCount = Math.ceil(movieItem.length / 30);
console.log(searchResult);
  
const displayMovies =
 movieItem && movieItem
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movies) => (
      <Movies {...movies} setSearchResult={setSearchResult} key={movies.id} />
    ));

const pagesHandler = (e, k) => {
  setPage(k);
};

const changePage = ({ selected }) => {
  setPage(selected);
  window.scroll(0, 200);
};
return (
  <>
    <div className="movie__container">
      <Searchbox setSearchResult={setSearchResult} movieItem={movieItem} />
      <div className="movie__display">
        {isLoading ? <CircularProgress color="secondary" /> : displayMovies}
        {/* <Movies key={movieItem} /> */}
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
