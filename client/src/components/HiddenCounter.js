function HiddenCounter({ count }) {
  const showHiddenCounter = () => {
    if (count >= 1) {
      return (
        <span id="counter-span">
          (<span id="hideTicketsCounter">{count}</span> Hidden tickets)
        </span>
      );
    }
  };
  return <div>{showHiddenCounter()}</div>;
}

export default HiddenCounter;
