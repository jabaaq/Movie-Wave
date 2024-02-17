import "./FavoriteMediaCard.scss";
import Tilt from "react-parallax-tilt";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const FavoriteMediaCard = ({ media }) => {
  const { id, title, poster, release_date, mediaType } = media;
  return (
    <div className="favorite_media_card_container">
      <Link to={`/${mediaType.toLowerCase()}/${id}`}>
        <Tilt
          tiltEnable={false}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="white"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <div className="favorite_media_card">
            <div className="favorite_media_card_content">
              <img src={poster} alt={`${title}'s Poster`} />
              <h4 className="favorite_media_name">
                {title.length > 15 ? title.slice(0, 15) + "..." : title}
              </h4>
              <h5>
                {mediaType} <BsDot /> {release_date.slice(0, 4)}
              </h5>
            </div>
          </div>
        </Tilt>
      </Link>
    </div>
  );
};

export default FavoriteMediaCard;
