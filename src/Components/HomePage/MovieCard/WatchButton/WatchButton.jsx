import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa6";
import { selectMediaId } from "../../HomePageSlice";
import { useEffect } from "react";

import "./WatchButton.css";
import { Link } from "react-router-dom";

const WatchButton = ({ id, mediaType }) => {
  const dispatch = useDispatch();
  const { selectedMedia } = useSelector((state) => state.HomePageReducer);

  // useEffect(() => {
  //   console.log(selectedMedia ? selectedMedia : "nope");
  // }, [selectedMedia]);

  return (
    <button className="watch_button">
      <div className="sign">
        <FaPlay />
      </div>

      <div className="text">Watch</div>
    </button>
  );
};

export default WatchButton;
