import React from "react";
import "./ScrollDown.css";
const ScrollDown = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          bottom: "3rem",
          right: "0",
          zIndex: "10",
        }}

     onClick={()=>window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          >
        ScrollDown
      </div>
    </div>
  );
};

export default ScrollDown;
