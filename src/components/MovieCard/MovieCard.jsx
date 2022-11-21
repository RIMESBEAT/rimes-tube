/* eslint-disable no-lone-blocks */
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import CircularProgress from "@mui/material/CircularProgress";

import "./MovieCard.css";

function MovieCard() {
  const [movieItem, setMovieItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movies, moviesOrder } = useContext(MovieContext);
  
  const movieFetchBox = async () => {
   setIsLoading(true)
    await fetch(
      `https://www.eporner.com/api/v2/video/search/?query=${movies}&per_page=10&page=2&thumbsize=big&order=${moviesOrder}&gay=1&lq=1&format=json`
    )
      .then((res) => res.json())
      .then((data) => setMovieItem(data));
    setIsLoading(false)
  };
  useEffect(() => {
    movieFetchBox();
  }, [movies, moviesOrder]);
  console.log(movieItem);
  // const { id, title } = movieItem.videos;
  return (
    <div className="movie__container">
      {movieItem.videos &&
        movieItem.videos.map((movies) => {
          const {
            id,
            title,
            url,
            views,
            default_thumb,
            added,
            length_min,
            keywords,
          } = movies;

          return (
            <div className="movie__card" key={id}>
              <div className="movie__image">
                {isLoading ? (
                  <CircularProgress/>
                ) : (
                  <a href={url}>
                    <img src={default_thumb.src} alt="" />
                    <span className="movie__time">{length_min}</span>
                    <span className="card__icon">
                      <i class="fa-regular fa-clock card__clock"></i>
                      <i className="fa-solid fa-bars-staggered card__bar"></i>
                      <i className="fa-solid fa-ellipsis-vertical card__dot"></i>
                    </span>
                  </a>
                )}
              </div>
              <div className="movie__details__container">
                <div className="movie__avater">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                    css={{ cursor: "pointer" }}
                  />
                </div>
                <div className="movie__details">
                  <h4>{title.slice(0, 20)}</h4>
                  <p>{keywords.slice(0, 10)}</p>
                  <span>
                    {views} Views &bull; {added.slice(0, 10)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
  // }
}

export default MovieCard;
