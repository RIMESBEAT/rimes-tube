import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PlayBox from "./components/PlayBox/PlayBox";
import Player from "./components/Player/Player";
import ScrollDown from "./components/ScrollDown/ScrollDown";
import Searchbox from "./components/Searchbox/Searchbox";
// import Player from "./components/PlayBox/Player/Player";

function App({movieItem, setSearchResult}) {
  return (
    <div className="App">
      <Banner />
      <Navbar movieItem={movieItem} setSearchResult={setSearchResult} />
      <ScrollDown />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/videos/*"
            element={<Player />}
            exact
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
