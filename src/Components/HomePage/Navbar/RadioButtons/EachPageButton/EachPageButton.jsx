import { Link } from "react-router-dom";
import "./EachPageButton.css";

const EachPageButton = ({ name }) => {
  return (
    <button className="button" data-text="Awesome">
      <span className="actual-text">&nbsp;{name}&nbsp;</span>
      <span aria-hidden="true" className="hover-text">
        &nbsp;{name}&nbsp;
      </span>
    </button>
  );
};

export default EachPageButton;
