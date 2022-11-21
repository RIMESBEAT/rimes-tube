import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Movies.css";

function Movies() {
  return (
    <div className="movies__grid">
      <MovieCard />
    </div>
  );
}

export default Movies;
