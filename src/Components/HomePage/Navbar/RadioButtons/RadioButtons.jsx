import "./RadioButtons.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const RadioButtons = () => {
  const { toggleNavigation } = useSelector((state) => state.HomePageReducer);

  return (
    <div className={`mydict ${toggleNavigation ? "block" : null}`}>
      <div>
        <label>
          <input type="radio" name="radio" />
          <span>Home</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Movies&Shows</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Support</span>
        </label>
      </div>
    </div>
  );
};

export { RadioButtons };
