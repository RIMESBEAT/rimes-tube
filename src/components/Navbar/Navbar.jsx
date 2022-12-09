import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import UserImage from "../../assets/user.jpg";
import "./Navbar.css";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import Searchbox from "../Searchbox/Searchbox";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import {  InView, useInView, } from "react-intersection-observer";
import VideoFilter from "../VideoFilter/VideoFilter";

function Navbar({
  movieItem,
  setSearchResult,
  handleSearchChange,
  searchResult,
}) {
  const [navDropDown, setNavDropDown] = useState(false);
  const [navOpen, setNavOpen] = useState();

  return (
    <div>
      <nav>
        {/* <Searchbox
          movieItem={movieItem}
          searchResult={searchResult}
          // handleSearchChange={handleSearchChange}
        /> */}

        {/* <VideoFilter /> */}
      </nav>
    </div>
  );
}

export default Navbar;
