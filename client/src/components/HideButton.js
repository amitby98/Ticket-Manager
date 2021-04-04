import React from "react";
import logo from "../hiden-icon.png";

function HideButton({ handleHide, updateCounter }) {
  const wrapperFunction = () => {
    handleHide();
    updateCounter();
  };
  return (
    // <button id="hideTicketButton" onClick={wrapperFunction}>
    //   Hide
    // </button>
    <img src={logo} id="hideTicketButton" onClick={wrapperFunction} />
  );
}

export default HideButton;
