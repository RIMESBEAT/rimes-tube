import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import { useState } from 'react';

const Searchbox = ({ movieItem, setSearchResult }) => {
  // const [searchMovies, setSearchMovies] = useState();

  const handleSearch = async (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResult(movieItem);
    const resultsArray =
      movieItem &&
      movieItem.filter(
        (movieItem) =>
          movieItem.title.toLowerCase().includes(e.target.value) &&
          movieItem.categories.toLowerCase().includes(e.target.value) 
          
      )
    setSearchResult(resultsArray)
  };
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
        // value={searchMovies}
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