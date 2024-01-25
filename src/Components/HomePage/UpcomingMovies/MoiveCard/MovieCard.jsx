import "./MovieCard.scss";

const MovieCard = ({ title, poster }) => {
  return (
    <div className="upcoming_slider_content">
      <div className="upcoming_movie_information">
        <div className="movie_title">{title}</div>
      </div>
      <img src={poster} alt={title} className="upcoming_img" />
    </div>
  );
};

export default MovieCard;
