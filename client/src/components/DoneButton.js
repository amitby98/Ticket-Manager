import React from "react";
import logo from "../done-icon.png";

function DoneButton(props) {
  const setDone = (bool) => {
    if (bool) {
    } else {
    }
  };

  return <img src={logo} id="done-button" />;
}

export default DoneButton;
