import Ticket from "./Ticket";

function SearchBox() {
  //////Testing array, retrieve mongoDB values later
  let arrayTest = [
    <Ticket
      title="titleee"
      content="sssssss"
      userEmail="Amitby98"
      creationTime="2018-11-13T12:13:55.544Z"
      labels={[`test `, `Guidelines`]}
    />,
    <Ticket
      title="title2"
      content="2222222222"
      userEmail="Amitby98"
      creationTime="2018-11-13T12:13:55.544Z"
      labels={[`Corvid `, `test`]}
    />,
    <Ticket
      title="title3"
      content="33333333"
      userEmail="Amitby98"
      creationTime="2018-11-13T12:13:55.544Z"
      labels={[`Corvid `, `Guidelines`, `API`]}
    />,
  ];
  //End of testing array.

  return (
    <div>
      <span>
        <input type="text" />
      </span>
      <div>{arrayTest}</div>
    </div>
  );
}

export default SearchBox;
