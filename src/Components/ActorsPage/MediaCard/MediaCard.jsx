import "./MediaCard.scss";
import { useState } from "react";
import WatchButton from "../../HomePage/MovieCard/WatchButton/WatchButton";
import { Rate } from "antd";
import { Link } from "react-router-dom";

const MediaCard = ({ poster, id, rating, title, type }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleShowDetails = () => {
    setShowCardDetails(!showCardDetails);
  };

  return (
    <Link to={`/movie-wave/more/${type}/${id}`} className="media_card">
      <div
        className={`media_card_box ${showCardDetails ? "show" : "hide"}`}
        onMouseEnter={handleShowDetails}
        onMouseLeave={handleShowDetails}
      >
        <WatchButton />
        <h3>{title}</h3>
        <Rate
          disabled
          allowHalf
          defaultValue={rating}
          className="rating_stars"
        />
      </div>
      <img src={poster} alt={title} loading="lazy" />
    </Link>
  );
};

export default MediaCard;
