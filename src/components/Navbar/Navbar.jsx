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

function Navbar() {
  const [navDropDown, setNavDropDown] = useState(false);
  const [navOpen, setNavOpen] = useState();

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

  return (
    <div>
      <nav>
        <div className="nav__container">
          {/* <div className="toggle__icons" onClick={navBarHandler}>
            {navOpen ? <ClearIcon /> : <MenuIcon />}
          </div> */}
          <div className="logo">
            <i className="fa-brands fa-youtube"></i>
            RimesTube
          </div>

          {/* <div className={navOpen ? "nav__items active" : "nav__items"}>
            <div className="navbar__toggle sm-hidden">
              <Searchbox />
              <FormControl sx={{ m: 0.5, minWidth: 80 }} size="small">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectMovies}
                  onChange={movieHandler}
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
              <FormControl sx={{ m: 0.5, minWidth: 80,  }} size="small">
                <Select
                  labelId="demo-simple-select-labeh"
                  id="demo-simple-select"
                  value={moviesOrder}
                  onChange={movieOrderHandler}
                  sx={{display: "flex", }}
                >
                  <MenuItem value="latest">Latest</MenuItem>
                  <MenuItem value="longest">Longest</MenuItem>
                  <MenuItem value="shortest">Shortest</MenuItem>
                  <MenuItem value="top-rated">Top-rated</MenuItem>
                  <MenuItem value="most-rated">Most-rated</MenuItem>
                  <MenuItem value="top-monthly">Top-monthly</MenuItem>
                  <MenuItem value="top-weekly">top-weekly</MenuItem>
                  <MenuItem value="most-popular">most-popular</MenuItem>
                </Select>
              </FormControl>
              <div className="user__avater">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                <div
                  className={
                    navDropDown
                      ? "user__icon__toggle active"
                      : "user__icon__toggle"
                  }
                > */}

                    <Avatar
                      bordered
                      color="secondary"
                      size="md"
                      src={UserImage}
                      css={{ cursor: "pointer" }}
                    />
               
                  {/* <section className="toggle__account__container">
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
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
