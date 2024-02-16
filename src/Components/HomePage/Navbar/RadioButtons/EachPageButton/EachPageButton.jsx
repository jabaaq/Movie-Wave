import "./EachPageButton.css";
import { navbarToggle } from "../../../HomePageSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const EachPageButton = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="button"
      data-text="Awesome"
      onClick={() => (innerWidth <= 600 ? dispatch(navbarToggle()) : null)}
    >
      <span className="actual-text">&nbsp;{name}&nbsp;</span>
      <span aria-hidden="true" className="hover-text">
        &nbsp;{name}&nbsp;
      </span>
    </button>
  );
};

export default EachPageButton;
