import "./Favorites.scss";
import Footer from "../Footer/Footer";
import { FaHeart } from "react-icons/fa";
import FavoriteMediaCard from "./FavoriteMediaCard/FavoriteMediaCard";
import { useEffect } from "react";

const Favorites = () => {
  const storagedFavoriteList = JSON.parse(
    localStorage.getItem("favoriteMedia")
  );

  useEffect(() => {
    console.log(storagedFavoriteList);
  }, []);

  return (
    <>
      <div className="favorites_container">
        <h2>
          <FaHeart /> FAVORITES
        </h2>
        <div className="favorite_media_cards_container">
          {storagedFavoriteList &&
            storagedFavoriteList.map((media, i) => (
              <FavoriteMediaCard key={i} media={media} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
