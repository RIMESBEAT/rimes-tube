import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";

function Home() {
  return (
    <div className="home__container">
      <Sidebar/>

      <MovieCard />
    </div>
  );
}

export default Home;
