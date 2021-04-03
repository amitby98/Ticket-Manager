import { useState } from "react";
import HideButton from "./HideButton";
import "../Ticket.css";

function Ticket({
  ticket,
  title,
  content,
  userEmail,
  creationTime,
  labels,
  updateCounter,
  hiddenTickets,
  setHiddenTickets,
}) {
  const handleHide = () => {
    console.log(ticket);
    setHiddenTickets([...hiddenTickets, ticket]);
    console.log(hiddenTickets);
  };

  if (hiddenTickets.includes(ticket)) {
    return null;
  }

  return (
    <div className="ticket">
      <div className="ticket-header">
        <HideButton handleHide={handleHide} updateCounter={updateCounter} />
        <h3>{title}</h3>
      </div>
      <div className="ticket-labels">
        {" "}
        <span>
          {labels?.map((label) => (
            <label className={`label ${label}`}>{label}</label>
          ))}
        </span>
      </div>
      <p className="ticket-content">
        {content}
        <br />
        <span id="show-more"> Show more</span>
      </p>
      By {userEmail} | {creationTime}
    </div>
  );
}

export default Ticket;
