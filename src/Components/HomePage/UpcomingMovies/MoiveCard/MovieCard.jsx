import { useEffect, useState } from "react";
import "./MovieCard.scss";
import { Rate } from "antd";

const MovieCard = ({ title, poster, rating, date }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleShowDetails = () => {
    setShowCardDetails(!showCardDetails);
  };

  useEffect(() => {
    console.log(showCardDetails);
  }, [showCardDetails]);

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
