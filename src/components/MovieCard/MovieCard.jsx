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
  const [isLoading, setIsLoading] = useState(false);
  // const { selectMovies, moviesOrder } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const [searchResult, setSearchResult] = useState();
  const [sortValue, setSortValue] = useState(" ");
  const moviesPerPage = 30;
  const pagesVisited = page * moviesPerPage;

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

  const loadMovieData = async () => {
    return await axios
      .get(
        "https://hdzog.com/admin/feeds/promo/?categories=lesbian&only_hd=on&feed_format=csv&screenshot_format=source&limit=90000&csv_separator=%7C"
      )
      .then((response) => setMovieItem(response.data))
      .catch((err) => console.log(err));
  };
  console.log(movieItem);
  const handleSearch = async (e) => {
    e.preventDefault();
    // return await axios
    //   .get(`http://localhost:5000/videos?q=${searchMovies}`)
    //   .then((response) => {
    //     setMovieItem(response.data);
    //     setSearchMovies("");

    // })
    // .catch((err) => console.log(err));
  };

  const handleSort = async (e) => {
    // let value = e.target.value;
    // setSortValue(value);
    // return await axios
    //   .get(`http://localhost:5000/videos?_sort=${value}&_order=asc`)
    //   .then((response) => {
    //     setMovieItem(response.data);
    //   })
    //   .catch((err) => console.log(err));
  };
  const pageCount = Math.ceil(movieItem.length / 30);

  // const displayMovies =
  //   movieItem.length > 0 &&
  //   movieItem
  //     .slice(pagesVisited, pagesVisited + moviesPerPage)
  //     .map((movies) => (
  //       <Movies {...movies} setSearchResult={setSearchResult} key={movies.id} />
  //     ));

  const pagesHandler = (e, k) => {
    setPage(k);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  return (
    <>
      <div className="movie__container">
        <div className="movie__display">
          {/* {isLoading ? <CircularProgress color="secondary" /> : content} */}

          {/* <Movies  key={ movieItem}  /> */}
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
