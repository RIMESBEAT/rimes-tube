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
} from "@mui/material";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

function Navbar() {
  const [navDropDown, setNavDropDown] = useState(false);

  const { movies, setMovies, moviesOrder, setOrder } = useContext(MovieContext);
  const navDropDownHandler = () => {
    setNavDropDown(!navDropDown);
  };

  const movieOrderHandler = (e) => {
    // e.preventDefault();
    setOrder(e.target.value);
  };
  const movieHandler = (e) => {
    e.preventDefault();
    setMovies(e.target.value);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={movies}
                label="Age"
                onChange={movieHandler}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="teen">Teen</MenuItem>
                <MenuItem value="lesbian">Lesbian</MenuItem>
                <MenuItem value="ebony">Ebony</MenuItem>
                <MenuItem value="bdsm">BDSM</MenuItem>
                <MenuItem value="gay">Gay</MenuItem>
                <MenuItem value="shemale">She Male</MenuItem>
              </Select>
            </FormControl>
            {/* <FormControl fullWidth>
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
              </Select>
            </FormControl> */}
            <Search value={moviesOrder} onChange={movieOrderHandler}>
              <SearchIconWrapper>{/* <SearchIcon /> */}</SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
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
