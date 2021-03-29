function HiddenCounter({ count }) {
  const showHiddenCounter = () => {
    if (count >= 1) {
      return <span>Hidden tickets: {count} </span>;
    }
  };
  return <div>{showHiddenCounter()}</div>;
}

export default HiddenCounter;
