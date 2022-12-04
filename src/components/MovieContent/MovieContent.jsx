import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Movies from "../Movies/Movies";
import "./MovieContent.css"

const MovieContent = ({ searchResult, moviesItem }) => {
  const [newMovie, setNewMovie]=useState([])

  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(searchResult && searchResult.length / 30 );
  const pagesHandler = (e, k) => {
    setPage(k);
  };

  const LoadNewMovies = async () => {
   const output = await fetch(
     "https://hdzog.com/admin/feeds/promo/?categories=lesbian&only_hd=on&feed_format=csv&screenshot_format=source&limit=90000&csv_separator=%7C"
   ).then((res)=>res.json()).then((data)=>setNewMovie(data))
   console.log(output);
  }
  useEffect(() => {
    LoadNewMovies()
  }, [])
console.log(newMovie);
  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const moviesPerPage = 30;


  const pagesVisited = page * moviesPerPage;
  const results =
    searchResult &&
    searchResult
      .slice(pagesVisited, pagesVisited + moviesPerPage)
      .map((movies) => <Movies {...movies} key={movies.id} />);
    const content = results?.length ? (
      results
    ) : (
      <article>
        <p>No Matching Item</p>
      </article>
    )

  return (
    <div style={{ width: "100%" }}>
      <main className="movie__content " >{content}</main>
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
  );
};

export default MovieContent;
