import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Movies from "../Movies/Movies";
import "./MovieContent.css"

const MovieContent = ({ searchResult, movieItem }) => {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(searchResult && searchResult.length / 30);

  const pagesHandler = (e, k) => {
    setPage(e);
  };

  const changePage = ({ selected }) => {
    setPage(selected)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

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
  );

  if (results === "") {
   return results
 }
  return (
    <div style={{ width: "100%" }}>
      <main className="movie__content ">{content}</main>
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
