import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import UserImage from "../../assets/user.jpg";
import Badge from "@mui/material/Badge";
import "./Navbar.css";
import {
  alpha,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  styled,
  withStyles,
} from "@mui/material";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import Searchbox from "../Searchbox/Searchbox";

function Navbar() {
  const [navDropDown, setNavDropDown] = useState(false);

  const { selectMovies, setSelectMovies, moviesOrder, setOrder } = useContext(MovieContext);
  const navDropDownHandler = () => {
    setNavDropDown(!navDropDown);
  };

  const movieOrderHandler = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
  };
  const movieHandler = (e) => {
    // e.preventDefault();
    setSelectMovies(e.target.value);
  };


  return (
    <div>
      <nav>
        <div className="nav__container">
          <div className="logo">
            <div className="side__bar__burger">
              <i className="fa-solid fa-bars"></i>
            </div>
            <i className="fa-brands fa-youtube"></i>
            RimesTube
          </div>
          <div className="search__bar__nav">
            <Searchbox />
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectMovies}
                // label="Age"
                onChange={movieHandler}

                // sx={{ display: "flex", flexWrap: "wrap" }}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="teen">Teen</MenuItem>
                <MenuItem value="lesbians">Lesbian</MenuItem>
                <MenuItem value="ebony">Ebony</MenuItem>
                <MenuItem value="bdsm">BDSM</MenuItem>
                <MenuItem value="gay">Gay</MenuItem>
                <MenuItem value="mom">Mom</MenuItem>
                <MenuItem value="family">Family</MenuItem>
                <MenuItem value="shemale">She Male</MenuItem>
                <MenuItem value="doggystyle">doggy</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-labeh"
                id="demo-simple-selectgf"
                value={moviesOrder}
                label="Age"
                onChange={movieOrderHandler}
              >
                <MenuItem value="latest">Latest</MenuItem>
                <MenuItem value="longest">Longest</MenuItem>
                <MenuItem value="shortest">Shortest</MenuItem>
                <MenuItem value="top-rated">Top-rated</MenuItem>
                <MenuItem value="most-rated">Most-rated</MenuItem>
              </Select>
            </FormControl>

            <i className="fa-solid fa-magnifying-glass search__icon"></i>
            <div className="mic">
              <i className="fa-solid fa-microphone"></i>
            </div>
          </div>
          <div className="user__icon">
            <div className="upload__icon">
              <i className="fa-solid fa-upload"></i>
            </div>
            <div className="notification">
              <Badge
                color="error"
                content={5}
                size={"sm"}
                css={{ zIndex: "0" }}
              >
                <i className="fa-regular fa-bell"></i>
              </Badge>
            </div>
            <div className="user__avater">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

              <div
                className={
                  navDropDown
                    ? "user__icon__toggle active"
                    : "user__icon__toggle"
                }
              >
                <header className="toggle__header">
                  <Avatar
                    bordered
                    color="secondary"
                    size="md"
                    src={UserImage}
                    css={{ cursor: "pointer" }}
                  />
                  <div className="toggle__content">
                    <h2>Rimes Beat</h2>
                    <h4>Manage RimesTube Account</h4>
                  </div>
                </header>
                <section className="toggle__account__container">
                  <ul className="toggle__account__content">
                    <li>Your channel</li>
                    <li>RimesTube Studio</li>
                    <li>Switch account</li>
                    <li>Sign out</li>
                  </ul>
                  <ul className="toggle__account__content">
                    <li>Purchases and memberships</li>
                    <li>Your data in RimesTube</li>
                  </ul>
                  <ul className="toggle__account__content">
                    <li>Appearance: Device theme</li>
                    <li>Language: English</li>
                    <li>Restricted Mode: Off</li>
                    <li>Location: Nigeria</li>
                    <li>Keyboard shortcuts</li>
                  </ul>
                  <ul className="toggle__account__content">
                    <li>Settings</li>
                  </ul>
                  <ul className="toggle__account__content">
                    <li>Help</li>
                    <li>Send feedback</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
