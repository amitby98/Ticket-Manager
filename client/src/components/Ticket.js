import { useState } from "react";
import HideButton from "./HideButton";

function Ticket({
  title,
  content,
  userEmail,
  creationTime,
  labels,
  updateCounter,
}) {
  const [hidden, setHidden] = useState(false);
  const handleHide = () => {
    if (!hidden) {
      setHidden(true);
    }
  };

  const unsetHidden = () => {
    setHidden(false);
  };

  if (hidden) {
    return null;
  }

  return (
    <div className="ticket">
      <h3>{title}</h3>
      <HideButton handleHide={handleHide} updateCounter={updateCounter} />
      <p>{content}</p>
      <p>
        By {userEmail} | {creationTime}
      </p>
      <span>
        {labels?.map((label) => (
          <label
            // key={label.id}
            className={`label ${label}`}
          >
            {label}
          </label>
        ))}
      </span>
    </div>
  );
}
export default Ticket;
