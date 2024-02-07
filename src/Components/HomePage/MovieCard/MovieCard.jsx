import { useState, useEffect } from "react";
import "./MovieCard.scss";
import { Rate } from "antd";
import WatchButton from "./WatchButton/WatchButton";
import { selectMediaId } from "../HomePageSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({ title, poster, rating, date, id, type, mediaType }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowDetails = () => {
    setShowCardDetails(!showCardDetails);
  };

  return (
    <div className="upcoming_slider_content">
      <Link
        to={`/movie-wave/${mediaType}/${id}`}
        onClick={() => selectMediaId(id, mediaType)}
      >
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
        <img src={poster} alt={title} loading="lazy" className="upcoming_img" />
      </Link>
    </div>
  );
};

export default MovieCard;
