import React from "react";
import logo from "../done-icon.png";

function DoneButton(props) {
  return (
    <img
      onClick={() => props.changeDone()}
      src={logo}
      alt="done-logo"
      id="done-button"
    />
  );
}
export default DoneButton;
