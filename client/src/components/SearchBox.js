import { useState, useEffect } from "react";
import HiddenCounter from "./HiddenCounter";
import Ticket from "./Ticket";
import axios from "axios";

function SearchBox() {
  ////Testing array, retrieve mongoDB values later
  // let ticketArray = [
  //   <Ticket
  //     title="titleee"
  //     content="sssssss"
  //     userEmail="nivm200"
  //     creationTime="2018-11-13T12:13:55.544Z"
  //     labels={[`test `, `Guidelines`]}
  //     updateCounter={() => setCount(count + 1)}
  //   />,
  //   <Ticket
  //     title="title2"
  //     content="2222222222"
  //     userEmail="nivm200"
  //     creationTime="2018-11-13T12:13:55.544Z"
  //     labels={[`Corvid `, `test`]}
  //     updateCounter={() => setCount(count + 1)}
  //   />,
  //   <Ticket
  //     title="title3"
  //     content="33333333"
  //     userEmail="nivm200"
  //     creationTime="2018-11-13T12:13:55.544Z"
  //     labels={[`Corvid `, `Guidelines`, `API`]}
  //     updateCounter={() => setCount(count + 1)}
  //   />,
  // ];

  let ticketArray = [];
  //End of testing array.
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  ////////////////////
  const showAll = () => {
    setCount(0);
    // arrayTest.map((ticket) => {});
  };
  //////////////////
  // useEffect(() => {
  //   function ComponentDidUpdate() {
  //     axios.get(`/api/tickets`).then((res) => {
  //       let array = res.data;
  //       setData(array);
  //       console.log(array);
  //       console.log("cheeseeee");
  //     });
  //   }
  // });

  const updateTickets = (args) => {
    if (!args) {
      args = "";
    }
    if (ticketArray.length > 5) {
      let arr = ticketArray.filter((ticket) => ticket.title.include(args));
      setData(arr);
    } else {
      axios.get(`/api/tickets/?searchText=` + args).then((res) => {
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

  return (
    <div>
      <span>
        <input
          type="text"
          onChange={(e) => updateTickets(e.target.value)}
          //it works! :D
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
