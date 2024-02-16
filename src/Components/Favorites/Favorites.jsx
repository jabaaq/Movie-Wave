import "./Favorites.scss";
import Footer from "../Footer/Footer";
import { FaHeart } from "react-icons/fa";
import FavoriteMediaCard from "./FavoriteMediaCard/FavoriteMediaCard";

const Favorites = () => {
  return (
    <>
      <div className="favorites_container">
        <h2>
          <FaHeart /> FAVORITES
        </h2>
        <div className="favorite_media_cards_container">
          <FavoriteMediaCard />
          <FavoriteMediaCard />
          <FavoriteMediaCard />
          <FavoriteMediaCard />
          <FavoriteMediaCard />
          <FavoriteMediaCard />
          <FavoriteMediaCard />
          <FavoriteMediaCard />
          <FavoriteMediaCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
