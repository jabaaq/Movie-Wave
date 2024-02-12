import "./RadioButtons.css";
import { useSelector } from "react-redux";
import EachPageButton from "./EachPageButton/EachPageButton";
import { Link } from "react-router-dom";

const RadioButtons = () => {
  const { toggleNavigation } = useSelector((state) => state.HomePageReducer);

  return (
    <div className={`mydict ${toggleNavigation ? "block" : null}`}>
      <Link to={"/"}>
        <EachPageButton name={"HOME"} />
      </Link>
      <Link to={`/movie-wave/movie/pages`}>
        <EachPageButton name={"MOVIES"} type={"movie"} />
      </Link>
      <Link to={`/movie-wave/tv/pages`}>
        <EachPageButton name={"TV󠀮󠀮SERIES"} type={"tv"} />
      </Link>
    </div>
  );
};

export { RadioButtons };
