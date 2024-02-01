import { useState } from "react";
import "./MovieCard.scss";
import { Rate } from "antd";
import WatchButton from "./WatchButton/WatchButton";
import { selectMediaId } from "../HomePageSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ title, poster, rating, date, id, type, mediaType }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const dispatch = useDispatch();

  const handleShowDetails = () => {
    setShowCardDetails(!showCardDetails);
  };

  return (
    <div className="upcoming_slider_content">
      <div
        className="card_box"
        onMouseEnter={handleShowDetails}
        onMouseLeave={handleShowDetails}
        onClick={() => dispatch(selectMediaId({ id, mediaType }))}
      >
        <div
          className={`upcoming_movie_information ${
            showCardDetails ? "show" : "hide"
          }`}
        >
          {type !== "person" ? (
            <WatchButton id={id} mediaType={mediaType} />
          ) : null}
          <div className="card_movie_title">{title}</div>
          <div className="card_bottom_details">
            <Rate
              disabled
              allowHalf
              defaultValue={rating}
              className="rating_stars"
            />
            <p className="release_date">{date}</p>
          </div>
        </div>
      </div>
      <img src={poster} alt={title} className="upcoming_img" />
    </div>
  );
};

export default MovieCard;
