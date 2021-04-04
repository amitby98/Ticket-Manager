import { useState } from "react";
import HideButton from "./HideButton";
import ShowSpan from "./ShowSpan";
import DoneButton from "./DoneButton";
import "../styles/Ticket.css";

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
  const [hidden, setHidden] = useState("hidden");
  const showMore = () => {
    setHidden("shown");
  };

  const showLess = () => {
    setHidden("hidden");
  };

  const handleHide = () => {
    setHiddenTickets([...hiddenTickets, ticket]);
  };

  if (hiddenTickets.includes(ticket)) {
    return null;
  }

  return (
    <div className="ticket">
      <div className="ticket-header">
        <HideButton handleHide={handleHide} updateCounter={updateCounter} />
        <DoneButton />
        <h3 className="ticket-title">{title}</h3>
      </div>
      <div className="ticket-labels">
        {" "}
        <span>
          {labels?.map((label) => (
            <label className={`label ${label}`}>{label}</label>
          ))}
        </span>
      </div>
      <div className={hidden}>
        <p className="ticket-content">
          {content}
          <br />
        </p>
      </div>
      <ShowSpan className="show-more" showMore={showMore} showLess={showLess} />
      <span>By {userEmail}</span>
      <span id="creationTime">{creationTime}</span>
    </div>
  );
}

export default Ticket;
