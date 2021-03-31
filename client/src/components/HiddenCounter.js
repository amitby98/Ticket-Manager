function HiddenCounter({ count }) {
  const showHiddenCounter = () => {
    if (count >= 1) {
      return (
        <span>
          Hidden tickets: <span Id="hideTicketsCounter">{count}</span>{" "}
        </span>
      );
    }
  };
  return <div>{showHiddenCounter()}</div>;
}

export default HiddenCounter;
