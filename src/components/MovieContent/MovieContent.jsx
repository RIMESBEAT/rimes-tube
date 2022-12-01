import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Movies from "../Movies/Movies";

const MovieContent = ({ searchResult }) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(searchResult && searchResult.length / 30);
  const pagesHandler = (e, k) => {
    setPage(k);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
  };
console.log(searchResult);
  const moviesPerPage = 30;
  const pagesVisited = page * moviesPerPage;
  const results =
    searchResult &&
    searchResult.slice(pagesVisited, pagesVisited + moviesPerPage).map((movies) => <Movies {...movies} key={movies.id} />);
  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Item</p>
    </article>
  )

  return (
    <span>
      <main>{content}</main>
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
    </span>
  );
};

export default MovieContent;
