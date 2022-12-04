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

function Navbar() {
  const [navDropDown, setNavDropDown] = useState(false);
  const [navOpen, setNavOpen] = useState();

  const TrackVisible = () => {
    const { ref, entry } = useInView({ trackVisibility: true, delay: 100 });
    console.log(ref)
    return <div ref={ref}>{entry?.isVisible}</div>;
  };
  // const navBarHandler = () => {
  //   setNavOpen(!navOpen);
  // };
  // const { selectMovies, setSelectMovies, moviesOrder, setOrder } =
  //   useContext(MovieContext);
  // const navDropDownHandler = () => {
  //   setNavDropDown(!navDropDown);
  // };

  // const movieOrderHandler = (e) => {
  //   e.preventDefault();
  //   setOrder(e.target.value);
  // };
  // const movieHandler = (e) => {
  //   e.preventDefault();
  //   setSelectMovies(e.target.value);
  // };


  // return (
  //   <div>
  //     <nav>
  //       <InView>{TrackVisible}</InView>
  //     </nav>
  //   </div>
  // );
}

export default Navbar;
