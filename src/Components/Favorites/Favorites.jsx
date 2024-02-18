import "./Favorites.scss";
import FavoriteMediaCard from "./FavoriteMediaCard/FavoriteMediaCard";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Favorites = () => {
  const [editMode, setEditMode] = useState(false);

  const storagedFavoriteList = JSON.parse(
    localStorage.getItem("favoriteMedia")
  );

  return (
    <>
      <div className="favorites_container">
        <div className="favorites_container_header">
          <h2>
            <FaHeart /> FAVORITES
          </h2>
          <button
            className={`edit_fav_list_btn ${editMode ? "clicked" : ""}`}
            onClick={() => setEditMode(!editMode)}
          >
            <div viewBox="0 0 448 512" className="edit_icon">
              <MdEdit size={20} />
            </div>
          </button>
        </div>
        <div className="favorite_media_cards_container">
          {storagedFavoriteList &&
            storagedFavoriteList.map((media, i) => (
              <FavoriteMediaCard
                key={i}
                currItem={i}
                media={media}
                editMode={editMode}
                storagedFavoriteList={storagedFavoriteList}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
