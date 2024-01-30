import "./DetailsCard.css";

const DetailsCard = ({ poster }) => {
  return (
    <div className="details_card">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="card-inner">
        <img src={poster} id="movie_poster" alt="Movie" />
      </div>
    </div>
  );
};

export default DetailsCard;
