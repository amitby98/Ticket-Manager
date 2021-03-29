import { useState } from "react";

function Ticket({ title, content, userEmail, creationTime, labels }) {
  return (
    <div className="ticket">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        By {userEmail} | {creationTime}
      </p>
      <span>
        {labels?.map((label) => (
          <span
            // key={label.id}
            className={label}
          >
            {label + " "}
          </span>
        ))}
      </span>
    </div>
  );
}
export default Ticket;
