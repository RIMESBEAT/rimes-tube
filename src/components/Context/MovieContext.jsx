import { useReducer } from "react";
import { createContext } from "react";

export const MovieContext = createContext({
  setMovies: () => null,
  movies: "all",
  setOrder: () => null,
  moviesOrder: "",
});

export const MOVIES_ACTION_TYPE = {
  SET_CURRENT_MOVIES: "SET_CURRENT_MOVIES",
};
export const MOVIES_ORDERS_ACTION_TYPE = {
  SET_CURRENT_MOVIES: "SET_CURRENT_MOVIES",
};

export const MoviesReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case MOVIES_ACTION_TYPE.SET_CURRENT_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case MOVIES_ORDERS_ACTION_TYPE.SET_CURRENT_MOVIES:
      return {
        ...state,
        moviesOrder: payload,
      };
    default:
      throw new Error(`unhandled error${type} in moviesReducer`);
  }
};

const INITIAL_MOVIE_STATE = {
  movies: "all",
  order: "",
};

export const MovieProvider = ({ children }) => {
  const [{ movies, moviesOrder }, dispatch] = useReducer(
    MoviesReducer,
    INITIAL_MOVIE_STATE
  );
  const setOrder = (order) => {
    dispatch({
      type: MOVIES_ORDERS_ACTION_TYPE.SET_CURRENT_MOVIES,
      payload: order
    });
  };
  const setMovies = (movie) => {
    dispatch({
      type: MOVIES_ACTION_TYPE.SET_CURRENT_MOVIES,
      payload: movie,
    });
  };
  const value = { movies, setMovies, moviesOrder, setOrder };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
