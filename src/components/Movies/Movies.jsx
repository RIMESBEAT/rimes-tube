import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { CardMedia } from "@mui/material";
import "./Movies.css";
import { Link, useNavigate } from "react-router-dom";
import PlayBox from "../PlayBox/PlayBox";
import ReactPlayer from "react-player";

function Movies({
  title,
  added,
  default_thumb,
  id,
  url,
  views,
  embed,
  length_min,
}) {
  const navigate = useNavigate();



  return (
    <div className="" key={id}>
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        {/* <Link to={embed}> */}
        <CardMedia
          component="img"
          alt={title}
          height="180px"
          image={default_thumb.src}
          // onClick={gotoEmbedHandler}
        />
        {/* <iframe src={embed} controls poster={default_thumb.src} /> */}
        {/* </Link> */}
        {/* <ReactPlayer url={embed} controls /> */}
        <CardContent>
          <Typography
            gutterBottom
            variant="body3"
            sx={{
              display: "block",
              whiteSpace: "nowrap",
            }}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Views: {views} &bull; Added: {added.slice(0, 10)}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Duration: {length_min}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
}

export default Movies;
