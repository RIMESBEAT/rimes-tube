import React from "react";
import { useParams } from "react-router-dom";

const PlayBox = ({ embed , title }) => {
  const {id} =useParams()
  return (
    <div key={id}>
      PlayBox
      <iframe src={embed} title={title} frameborder="6"/>
    </div>
  );
};

export default PlayBox;
