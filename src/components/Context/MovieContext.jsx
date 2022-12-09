import { useReducer } from "react";
import { createContext } from "react";

export const MovieContext = createContext({
  setSelectMovies: () => null,
  selectMovies: "all",
  setOrder: () => null,
  moviesOrder: "latest",
  setSearchMoviesResult: () => null,
  searchMoviesResult: " ",
});

export const MOVIES_ACTION_TYPE = {
  SET_CURRENT_MOVIES: "SET_CURRENT_MOVIES",
};
export const MOVIES_ORDERS_ACTION_TYPE = {
  SET_MOVIES_ORDER: "SET_MOVIES_ORDER",
};
export const MOVIES_SEARCH_ACTION_TYPE = {
  SET_MOVIES_SEARCH: "SET_MOVIES_SEARCH",
};

export const MoviesReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case MOVIES_ACTION_TYPE.SET_CURRENT_MOVIES:
      return {
        ...state,
        selectMovies: payload,
      };
    case MOVIES_ORDERS_ACTION_TYPE.SET_MOVIES_ORDER:
      return {
        ...state,
        moviesOrder: payload,
      };
    case MOVIES_SEARCH_ACTION_TYPE.SET_MOVIES_SEARCH:
      return {
        ...state,
        searchMoviesResult: payload,
      };

    default:
      throw new Error(`unhandled error${type} in moviesReducer`);
  }
};

const INITIAL_MOVIE_STATE = {
  selectMovies: "all",
};
const INITIAL_MOVIE_ORDER_STATE = {
  moviesOrder: "latest",
};
const INITIAL_SEARCH_STATE = {
  searchMoviesResult: " ",
};

export const MovieProvider = ({ children }) => {
  const [{ selectMovies }, dispatch] = useReducer(
    MoviesReducer,
    INITIAL_MOVIE_STATE
  );
  const [{ moviesOrder }, dispatch1] = useReducer(
    MoviesReducer,
    INITIAL_MOVIE_ORDER_STATE
  );
  const [{ searchMoviesResult }, dispatch2] = useReducer(
    MoviesReducer,
    INITIAL_SEARCH_STATE
  );
  const setOrder = (moviesOrder) => {
    dispatch1({
      type: MOVIES_ORDERS_ACTION_TYPE.SET_MOVIES_ORDER,
      payload: moviesOrder,
    });
  };
  const setSelectMovies = (selectMovies) => {
    dispatch({
      type: MOVIES_ACTION_TYPE.SET_CURRENT_MOVIES,
      payload: selectMovies,
    });
  };
  const setSearchMoviesResult = (searchMoviesResult) => {
    dispatch2({
      type: MOVIES_SEARCH_ACTION_TYPE.SET_MOVIES_SEARCH,
      payload: searchMoviesResult,
    });
  };
  const value = {
    selectMovies,
    setSelectMovies,
    moviesOrder,
    setOrder,
    setSearchMoviesResult,
    searchMoviesResult,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
