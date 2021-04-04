import React from "react";
import logo from "../hidden-icon.png";

function HideButton({ handleHide, updateCounter }) {
  const wrapperFunction = () => {
    handleHide();
    updateCounter();
  };
  return (
    <img
      alt="hide-logo"
      src={logo}
      id="hideTicketButton"
      onClick={wrapperFunction}
    />
  );
}

export default HideButton;
