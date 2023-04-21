import React from "react";

const ColorBar = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: props.color,
      }}></div>
  );
};

export default ColorBar;
