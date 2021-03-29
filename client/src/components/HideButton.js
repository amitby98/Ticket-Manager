function HideButton({ handleHide, updateCounter }) {
  const wrapperFunction = () => {
    handleHide();
    updateCounter();
  };
  return <button onClick={wrapperFunction}>Hide</button>;
}

export default HideButton;
