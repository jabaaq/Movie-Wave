import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa6";
import { selectMediaId } from "../../HomePageSlice";

import "./WatchButton.css";
import { Link } from "react-router-dom";

const WatchButton = ({ id }) => {
  const dispatch = useDispatch();
  const { selectedMedia } = useSelector((state) => state.HomePageReducer);

  // useEffect(() => {
  //   console.log(selectedMedia ? selectedMedia : "nope");
  // }, [selectedMedia]);

  return (
    <Link to={`/${id}`}>
      <button
        className="watch_button"
        onClick={() => dispatch(selectMediaId(id))}
      >
        <div className="sign">
          <FaPlay />
        </div>

        <div className="text">Watch</div>
      </button>
    </Link>
  );
};

export default WatchButton;
