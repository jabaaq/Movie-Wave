import "./FavoriteMediaCard.scss";
import Tilt from "react-parallax-tilt";
import exampleImg from "../../../image/example-image.jpg";
import { BsDot } from "react-icons/bs";

const FavoriteMediaCard = () => {
  return (
    <div className="favorite_media_card_container">
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
            <img src={exampleImg} alt="example" />
            <h4 className="favorite_media_name">Wonka</h4>
            <h5>
              Movie <BsDot /> 2024
            </h5>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default FavoriteMediaCard;
