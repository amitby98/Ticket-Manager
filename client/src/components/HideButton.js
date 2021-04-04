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
      className="hideTicketButton"
      onClick={wrapperFunction}
    />
  );
}

export default HideButton;
