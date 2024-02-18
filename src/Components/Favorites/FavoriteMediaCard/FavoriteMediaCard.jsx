import "./FavoriteMediaCard.scss";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { BsDot } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const FavoriteMediaCard = ({
  media,
  editMode,
  currItem,
  storagedFavoriteList,
}) => {
  const { id, title, poster, release_date, mediaType } = media;

  localStorage.getItem("favoriteMedia");
  const handleMediaRemove = () => {};

  return (
    <div className="favorite_media_card_container">
      <button
        className={`remove_from_favorites_btn ${editMode ? "" : "none"}`}
        onClick={handleMediaRemove}
      >
        <IoCloseOutline size={30} />
      </button>
      <Link
        to={`/${mediaType.toLowerCase()}/${id}`}
        className={`${editMode ? "disabled_link" : ""}`}
      >
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
              <div
                className={`card_edit_mode ${editMode ? "block" : ""}`}
              ></div>
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
