import { useState } from "react";
import "./MovieCard.scss";
import { Rate } from "antd";
import WatchButton from "./WatchButton/WatchButton";

const MovieCard = ({ title, poster, rating, date, id }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleShowDetails = () => {
    setShowCardDetails(!showCardDetails);
  };

  return (
    <div className="upcoming_slider_content">
      <div
        className="card_box"
        onMouseEnter={handleShowDetails}
        onMouseLeave={handleShowDetails}
      >
        <div
          className={`upcoming_movie_information ${
            showCardDetails ? "show" : "hide"
          }`}
        >
          <WatchButton id={id} />
          {/* This ID will be used to navigate to the Movie Page in the future */}
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
