import { useReducer } from "react";
import { createContext } from "react";

export const MovieContext = createContext({
  setSelectMovies: () => null,
  selectMovies: "all",
  setOrder: () => null,
  moviesOrder: "latest",
});

export const MOVIES_ACTION_TYPE = {
  SET_CURRENT_MOVIES: "SET_CURRENT_MOVIES",
};
export const MOVIES_ORDERS_ACTION_TYPE = {
  SET_MOVIES_ORDER: "SET_MOVIES_ORDER",
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

export const MovieProvider = ({ children }) => {
  const [{ selectMovies }, dispatch] = useReducer(
    MoviesReducer,
    INITIAL_MOVIE_STATE
  );
  const [{ moviesOrder }, dispatch1] = useReducer(
    MoviesReducer,
    INITIAL_MOVIE_ORDER_STATE
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
  const value = { selectMovies, setSelectMovies, moviesOrder, setOrder };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
// export const MovieOrderProvider = ({ children }) => {
//   const [{ moviesOrder }, dispatch] = useReducer(
//     MoviesReducer,
//     INITIAL_MOVIE_ORDER_STATE
//   );
//   const setOrder = (order) => {
//     dispatch({
//       type: MOVIES_ORDERS_ACTION_TYPE.SET_CURRENT_MOVIES,
//       payload: order
//     });
//   };

//   const value = {  moviesOrder, setOrder };
//   return (
//     <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
//   );
// };
