import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Movies from "../Movies/Movies";

function Home() {
  return (
    <div className="home__container">
      <Sidebar/>
{/* <Movies/> */}
      <MovieCard />
    </div>
  );
}

export default Home;
