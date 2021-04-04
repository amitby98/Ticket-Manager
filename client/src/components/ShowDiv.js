function ShowDiv({ content, setShow, title }) {
  if (!content) {
    return <div>{content}</div>;
  } else {
    return (
      <div id="showDiv">
        <h1 id="showHeader">{title}</h1>
        {content}
        <br />
        <button id="closeButton" onClick={() => setShow("")}>
          Close
        </button>
      </div>
    );
  }
}
export default ShowDiv;
