import "./WaveButton.scss";
import { RiMovie2Fill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

const WaveButton = ({ text }) => {
  return (
    <button className="watch_movie_btn">
      <span className="watch_movie_btn_text">{text}</span>
      <span className="icon">
        {text === "WATCH NOW" ? (
          <RiMovie2Fill size={25} />
        ) : (
          <FaEye size={25} />
        )}
      </span>
    </button>
  );
};

export default WaveButton;
