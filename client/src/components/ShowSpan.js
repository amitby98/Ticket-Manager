function ShowSpan({ setShow, content, title, setTitle }) {
  const show = () => {
    setShow(content);
    setTitle(title);
  };
  return (
    <span id="show" onClick={() => show()}>
      Show more
    </span>
  );
}
export default ShowSpan;
