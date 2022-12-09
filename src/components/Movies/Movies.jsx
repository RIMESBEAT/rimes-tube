import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Movies.css";
import { Box, Modal } from "@mui/material";
import { BlurLinear } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Movies({
  embed_code,
  categories,
  main_thumbnail,
  preview_url,
  title,
  description,
  website_link,
  id,
  duration,
  publish_date,
  movies,
}) {
  let time = duration;
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    bgcolor: "transparent",
    boxShadow: 24,
    p: 0,
  };

  const navigate = useNavigate();

  const openMovieHandler = () => {
    navigate("/videos/:id");
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="" key={id}>
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardMedia
          component="img"
          alt={title}
          height="180px"
          image={main_thumbnail}
          onClick={handleOpen}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} id="modal-modal-title">
            <iframe
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
              value="1514958996"
            ></iframe>
          </Box>
        </Modal>
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
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "block",
              whiteSpace: "nowrap",
            }}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {categories}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Duration: {minutes} : {seconds} mins
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Movies;
