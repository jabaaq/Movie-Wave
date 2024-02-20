import { useDispatch, useSelector } from "react-redux";
import "./ToggleNavigation.css";
import { navbarToggle } from "../../HomePageSlice";

const ToggleNavigation = () => {
  const { toggleNavigation } = useSelector((state) => state.HomePageReducer);
  const dispatch = useDispatch();

  return (
    <div className="toggleButton">
      <input
        id="checkbox"
        type="checkbox"
        checked={toggleNavigation}
        onChange={() => toggleNavigation}
        onClick={() => dispatch(navbarToggle())}
      />
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
    </div>
  );
};

export { ToggleNavigation };
