import "./RadioButtons.css";
import { useSelector } from "react-redux";
import EachPageButton from "./EachPageButton/EachPageButton";
import { Link } from "react-router-dom";

const RadioButtons = () => {
  const { toggleNavigation } = useSelector((state) => state.HomePageReducer);

  return (
    <div className={`mydict ${toggleNavigation ? "block" : null}`}>
      <EachPageButton name={"HOME"} />
      <Link to={`/movie-wave/${"movie"}`}>
        <EachPageButton name={"MOVIES"} type={"movie"} />
      </Link>
      <EachPageButton name={"TV󠀮󠀮SERIES"} type={"tv"} />
    </div>
  );
};

export { RadioButtons };
