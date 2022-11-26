import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Movies from "../Movies/Movies";
import VideoFilter from "../VideoFilter/VideoFilter";

function Home() {
  return (
    <>
       <Sidebar />
      {/* <VideoFilter /> */}
      <div className="home__container">
     

      {/* <Movies/> */}
      <MovieCard />
    </div>
    </>
    
  );
}

export default Home;
