import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import { useState } from 'react';

const Searchbox = ({setMovieItem}) => {
  const [searchMovies, setSearchMovies] = useState();

    const handleSearch = async (e) => {
      e.preventDefault();
      return await axios
        .get(`http://localhost:5000/videos?q=${searchMovies}`)
        .then((response) => {
          setMovieItem(response.data);
          setSearchMovies("");
        })
        .catch((err) => console.log(err));
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
        value={searchMovies}
        onChange={(e)=>setSearchMovies(e.target.value)}
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