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
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const VideoFilter = () => {
  // const [getData, setGetData] = useState(txxx_code);

  // const vporn =  () => {
  //   fetch(
  //     "https://cors-anywhere.herokuapp.com/https://manysex.com/api/json/video/86400/1000000/1055000/1055521.json"
  //   )
  //     .then((res) => res.json)
  //     .then((data) => setGetData(data));
  // };
  // console.log(getData);



  // useEffect(() => {
  //   vporn();
  // }, []);

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
      <div
        className=""
        style={{ display: "flex", gap: 7 }}
        value={selectMovies}
      >
        <div value="all">All</div>
        <div value="lesbian">les</div>
        <div value="all">All</div>
        <div value="lesbian">les</div>
        <div value="all">All</div>
        <div value="lesbian">les</div>
        {/* <img src={getData.video.thumb} alt="" /> */}
   
        {/* <iframe
          src="https://videotxxx.com/embed/18783561/?promo=40959"
          frameborder="0"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          oallowfullscreen
          msallowfullscreen
        style={{width: "50%"}}
        ></iframe> */}
      </div>
      {/* </iron-selector> */}
      {/* </Slider> */}
      <Outlet />
    </div>
  );
};

export default VideoFilter;

