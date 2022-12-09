import React from "react";
import PlayBox from "../PlayBox/PlayBox";

const Player = ({ movieItem, id }) => {
  return (
    <div>
      <PlayBox {...movieItem} key={id} />
    </div>
  );
};

export default Player;
