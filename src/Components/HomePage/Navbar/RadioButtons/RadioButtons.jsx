import "./RadioButtons.css";
import { useSelector } from "react-redux";
import EachPageButton from "./EachPageButton/EachPageButton";
import { Link } from "react-router-dom";

const RadioButtons = () => {
  const { toggleNavigation } = useSelector((state) => state.HomePageReducer);

  return (
    <div className={`mydict ${toggleNavigation ? "block" : null}`}>
      <div className="link_buttons_container">
        <Link to={"/"}>
          <EachPageButton name={"HOME"} />
        </Link>
        <Link to={`/movies`}>
          <EachPageButton name={"MOVIES"} type={"movie"} />
        </Link>
        <Link to={`/tv`}>
          <EachPageButton name={"TV"} type={"tv"} />
        </Link>
      </div>
    </div>
  );
};

export { RadioButtons };
