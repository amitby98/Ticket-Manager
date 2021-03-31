function HideButton({ handleHide, updateCounter }) {
  const wrapperFunction = () => {
    handleHide();
    updateCounter();
  };
  return (
    <button className="hideTicketButton" onClick={wrapperFunction}>
      Hide
    </button>
  );
}

export default HideButton;
