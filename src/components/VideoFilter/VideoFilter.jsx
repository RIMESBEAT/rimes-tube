import React from "react";
import { useContext } from "react";
import Slider from "react-slick";
import { MovieContext } from "../Context/MovieContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";

const VideoFilter = () => {
  const { selectMovies, setSelectMovies } = useContext(MovieContext);
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 8,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="container">
      {/* <h2> Multiple items </h2> */}
      {/* <Slider {...settings}> */}
      {/* <iron-selector selected={selectMovies} onC > */}
      <div className="" style={{ display: "flex", gap: 7 }} value={selectMovies}
       >
          <div value="all">All</div>
          <div value="lesbian">les</div>
          <div value="all">All</div>
          <div value="lesbian">les</div>
          <div value="all">All</div>
          <div value="lesbian">les</div>
    </div>
      {/* </iron-selector> */}
      {/* </Slider> */}
    </div>
  );
};

export default VideoFilter;

