import { useDispatch, useSelector } from "react-redux";
import "./WatchButton.css";
import { FaPlay } from "react-icons/fa6";
import { selectMovie } from "../../../HomePageSlice";
import { useEffect } from "react";

const WatchButton = ({ id }) => {
  const dispatch = useDispatch();
  const { selectedMovie } = useSelector((state) => state.HomePageReducer);

  //   useEffect(() => {
  //     console.log(selectedMovie);
  //   }, [selectedMovie, dispatch]);

  return (
    <button className="watch_button" onClick={() => dispatch(selectMovie(id))}>
      <div className="sign">
        <FaPlay />
      </div>

      <div className="text">Watch</div>
    </button>
  );
};

export default WatchButton;
