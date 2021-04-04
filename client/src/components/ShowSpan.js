import { useState } from "react";

function ShowSpan({ showMore, showLess }) {
  const [shown, setShown] = useState(false);

  const show = () => {
    setShown(true);
    showMore();
  };

  const unShow = () => {
    setShown(false);
    showLess();
  };

  if (shown) {
    return (
      <span onClick={() => unShow()} id="show">
        Show less
      </span>
    );
  } else {
    return (
      <span onClick={() => show()} id="show">
        Show more
      </span>
    );
  }
}
export default ShowSpan;
