import "./MovieCard.scss";
import { Rate } from "antd";

const MovieCard = ({ title, poster, rating, date }) => {
  return (
    <div className="upcoming_slider_content">
      <div className="card_box">
        <div className="upcoming_movie_information">
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
