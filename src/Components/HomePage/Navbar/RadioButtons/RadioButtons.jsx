import "./RadioButtons.css";
import { useSelector } from "react-redux";
import EachPageButton from "./EachPageButton/EachPageButton";

const RadioButtons = () => {
  const { toggleNavigation } = useSelector((state) => state.HomePageReducer);

  return (
    <div className={`mydict ${toggleNavigation ? "block" : null}`}>
      <div className="section_buttons">
        <EachPageButton name={"HOME"} />
        <EachPageButton name={"MOVIES"} />
        <EachPageButton name={"TV󠀮󠀮SERIES"} />
      </div>
    </div>
  );
};

export { RadioButtons };
