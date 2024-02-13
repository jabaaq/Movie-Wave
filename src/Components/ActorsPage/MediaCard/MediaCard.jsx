import "./MediaCard.scss";
import { useEffect, useState } from "react";
import WatchButton from "../../HomePage/MovieCard/WatchButton/WatchButton";
import { Rate } from "antd";
import { Link } from "react-router-dom";

const MediaCard = ({ poster, id, rating, title, type, release_date }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleShowDetails = () => {
    setShowCardDetails(!showCardDetails);
  };

  return (
    <Link to={`/movie-wave/media/${type}/${id}`} className="media_card">
      <div
        className={`media_card_box ${showCardDetails ? "show" : "hide"}`}
        onMouseEnter={handleShowDetails}
        onMouseLeave={handleShowDetails}
      >
        <WatchButton />
        <h4>{title}</h4>
        {rating === 0 ? (
          <Rate
            disabled
            allowHalf
            defaultValue={rating}
            className="rating_stars"
          />
        ) : (
          <>
            <p>{release_date}</p>
          </>
        )}
      </div>
      <img src={poster} alt={title} loading="lazy" />
    </Link>
  );
};

export default MediaCard;
