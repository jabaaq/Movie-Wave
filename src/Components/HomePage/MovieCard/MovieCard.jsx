import { useEffect, useState } from "react";
import "./MovieCard.scss";
import { Rate } from "antd";
import WatchButton from "./WatchButton/WatchButton";
import { selectMediaId } from "../HomePageSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ title, poster, rating, date, id, type }) => {
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
        onClick={type === "person" ? () => dispatch(selectMediaId(id)) : null}
      >
        <div
          className={`upcoming_movie_information ${
            showCardDetails ? "show" : "hide"
          }`}
        >
          {type !== "person" ? <WatchButton id={id} /> : null}
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
