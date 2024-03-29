import { useState, useEffect } from "react";
import "./MovieCard.scss";
import { Rate } from "antd";
import WatchButton from "./WatchButton/WatchButton";
import { Link } from "react-router-dom";

const MovieCard = ({ title, poster, rating, date, id, type, mediaType }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleShowDetails = () => {
    setShowCardDetails(!showCardDetails);
  };

  return (
    <div className="upcoming_slider_content">
      <Link
        to={mediaType === "person" ? `/person/${id}` : `/${mediaType}/${id}`}
      >
        <div
          className="card_box"
          onMouseEnter={handleShowDetails}
          onMouseLeave={handleShowDetails}
          // onClick={() => dispatch(selectMediaId({ id, mediaType }))}
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
        <div className="movie_poster_container">
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="movie_poster"
          />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
