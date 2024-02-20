import "./Favorites.scss";
import FavoriteMediaCard from "./FavoriteMediaCard/FavoriteMediaCard";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { handleRemoveFromFavorites } from "../MoviesPage/MoviePageSlice";
import ClearStorage from "./ClearStorage/ClearStorage";
const Favorites = () => {
  const [editMode, setEditMode] = useState(false);
  const [, forceUpdate] = useState();
  const dispatch = useDispatch();

  const removeFromFavorites = (id) => {
    dispatch(handleRemoveFromFavorites(id));
    forceUpdate({});
  };
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
          <div className="fav_list_edit_tools">
            <ClearStorage editMode={editMode} forceUpdate={forceUpdate} />
            <button
              className={`edit_fav_list_btn ${editMode ? "clicked" : ""}`}
              onClick={() => setEditMode(!editMode)}
            >
              <div viewBox="0 0 448 512" className="edit_icon">
                <MdEdit size={20} />
              </div>
            </button>
          </div>
        </div>
        <div className="favorite_media_cards_container">
          {storagedFavoriteList &&
            storagedFavoriteList.map((media, i) => (
              <FavoriteMediaCard
                key={i}
                media={media}
                editMode={editMode}
                removeFromFavorites={removeFromFavorites}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
