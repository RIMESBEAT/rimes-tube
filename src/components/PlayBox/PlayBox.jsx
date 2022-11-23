import React from "react";

const PlayBox = ({ embed, id }) => {
  return (
    <div key={id}>
      PlayBox
      <iframe src={embed} frameborder="0"></iframe>
    </div>
  );
};

export default PlayBox;
