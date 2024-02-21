import "./RadioOptionButtons.css";
import { motion } from "framer-motion";

const RadioOptionButtons = ({ handleGetSortBy }) => {
  const motionSettings = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 1 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  return (
    <div className="radio-input" onChange={handleGetSortBy}>
      <label>
        <input
          type="radio"
          id="value-1"
          name="value-radio"
          value="movie"
          defaultChecked
        />
        <motion.span {...motionSettings}>MOVIE</motion.span>
      </label>
      <label>
        <input type="radio" id="value-2" name="value-radio" value="tv" />
        <motion.span {...motionSettings}>TV</motion.span>
      </label>
      <label>
        <input type="radio" id="value-3" name="value-radio" value="person" />
        <motion.span {...motionSettings}>PERSON</motion.span>
      </label>
      <span className="selection"></span>
    </div>
  );
};

export default RadioOptionButtons;
