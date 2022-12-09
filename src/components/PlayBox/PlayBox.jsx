import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { loadMoviesData } from "../../Axios/axios";
import MovieContent from "../MovieContent/MovieContent";
import Movies from "../Movies/Movies";

const PlayBox = () => {
  // const {id} = useParams()
    const [movieItem, setMovieItem] = useState([]);
    const [searchResult, setSearchResult] = useState([]);


    const sortMovies = ["categories", "description", "title", "duration"];
    useEffect(() => {
      loadMoviesData()
        .then((json) => {
          setMovieItem(json);
          return json;
        })
        // .then((json) => {
        //   setSearchResult(json);
        // });
    }, []);
  const {title, embed_code, main_thumbnail, id} = movieItem
  
  return (
    <div>
      PlayBox
      {
        <div>
          <iframe
            key={id}
            frameborder="2"
            allowfullscreen=""
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            oallowFullScreen="true"
            msallowfullscreen="true"
            title={title}
            src={embed_code}
            width="100%"
            height="100%"
            // value="1514958996"
          ></iframe>
          <img src={main_thumbnail} style={{ width: "50wh" }} alt="title" />
          <p>{title}</p>
        </div>
      }
    </div>
  );
};

export default PlayBox;

//  <div key={id}>
//               <iframe
//                 frameborder="2"
//                 allowfullscreen=""
//                 webkitallowfullscreen="true"
//                 mozallowfullscreen="true"
//                 oallowFullScreen="true"
//                 msallowfullscreen="true"
//                 title={title}
//                 src={embed_code}
//                 width="100%"
//                 height="100%"
//                 // value="1514958996"
//               ></iframe>
//               <img src={main_thumbnail} style={{ width: "50wh" }} alt="title" />
//               <p>{title}</p>
//             </div>