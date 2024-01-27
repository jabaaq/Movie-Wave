import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa6";
import { selectMedia } from "../../HomePageSlice";
import { useEffect } from "react";

import "./WatchButton.css";

const WatchButton = ({ id }) => {
  const dispatch = useDispatch();
  const { selectedMedia } = useSelector((state) => state.HomePageReducer);

  // useEffect(() => {
  //   console.log(selectedMedia ? selectedMedia : "nope");
  // }, [selectedMedia]);

  return (
    <button className="watch_button" onClick={() => dispatch(selectMedia(id))}>
      <div className="sign">
        <FaPlay />
      </div>

      <div className="text">Watch</div>
    </button>
  );
};

export default WatchButton;
