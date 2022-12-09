import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import { useState } from 'react';
import { Description } from '@mui/icons-material';
import { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';

const Searchbox = ({ movieItem, setSearchResult, searchResult }) => {
  // const [searchMovies, setSearchMovies] = useState();
  // const { searchMoviesResult, setSearchMoviesResult } = useContext(MovieContext);

  const handleSearch = async (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResult(movieItem)
    const resultsArray =
      movieItem  &&
      movieItem.filter(
        ({ title, description, categories }) =>
        title.toUpperCase().includes(e.target.value.toUpperCase()) ||
         ( description.toUpperCase().includes(e.target.value.toUpperCase()) ||
          categories.toUpperCase().includes(e.target.value.toUpperCase()))
      );
    
    setSearchResult(resultsArray);
  };

  

  // console.log(movieItem.data.categories);
  return (
    <Paper
      onSubmit={handleSearch}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", minWidth: 80 }}
      size="small"
    >
      <InputBase
        sx={{ ml: 0.5, flex: 1 }}
        placeholder="Search Porn Here"
        inputProps={{ "aria-label": "search google maps" }}
        // value={searchResult}
        onChange={handleSearchChange}
      />
      <IconButton type="button" sx={{ p: "10px" }}></IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Searchbox