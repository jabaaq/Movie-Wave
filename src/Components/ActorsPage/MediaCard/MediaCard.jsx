import "./MediaCard.scss";
import { useState } from "react";
import WatchButton from "../../HomePage/MovieCard/WatchButton/WatchButton";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MediaCard = ({ poster, id, rating, title, type, release_date }) => {
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleShowDetails = () => {
    setShowCardDetails(!showCardDetails);
  };

  return (
    <Link
      to={type === "person" ? `/person/${id}` : `/${type}/${id}`}
      className="media_card"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`media_card_box ${showCardDetails ? "show" : "hide"}`}
        onMouseEnter={handleShowDetails}
        onMouseLeave={handleShowDetails}
      >
        {type !== "person" ? <WatchButton /> : null}
        <h4>{title}</h4>
        {rating === 0 ? (
          <Rate
            disabled
            allowHalf
            defaultValue={rating}
            className="rating_stars"
          />
        ) : (
          <>
            <p>{release_date}</p>
          </>
        )}
      </motion.div>
      <img src={poster} alt={title} loading="lazy" />
    </Link>
  );
};

export default MediaCard;
