import { useState, useEffect } from "react";
import HiddenCounter from "./HiddenCounter";
import Ticket from "./Ticket";
import axios from "axios";

function SearchBox() {
  let ticketArray = [];
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");

  const showAll = () => {
    setCount(0);
  };

  const updateTickets = (args) => {
    if (!args) {
      args = "";
    }
    if (ticketArray.length > 5) {
      let arr = ticketArray.filter((ticket) => ticket.title.include(args));
      setData(arr);
    } else {
      axios.get(`/api/tickets?searchText=` + args).then((res) => {
        let array = res.data;
        ticketArray = array;
        setData(array);
      });
    }
  };

  const showButton = () => {
    if (count >= 1) {
      return <button onClick={showAll}>Show all</button>;
    }
  };

  useEffect(() => {
    updateTickets();
  }, []);

  return (
    <div>
      <span>
        <input
          className="input"
          type="text"
          onChange={(e) => updateTickets(e.target.value)}
        />
        <HiddenCounter count={count} showAll={showAll} />
        {showButton()}
      </span>
      <div>
        {data.map((ticket) => (
          <Ticket
            title={ticket.title}
            content={ticket.content}
            userEmail={ticket.userEmail}
            creationTime={ticket.creationTime}
            labels={ticket.labels}
            updateCounter={() => setCount(count + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBox;
