import React from "react";

const char = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "2px solid green",
    textAlign: "center",
  };

  return (
    <div style={style} onClick={props.click}>
      {props.chr}
    </div>
  );
};

export default char;
