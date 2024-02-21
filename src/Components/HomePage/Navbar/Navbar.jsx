import { useEffect, useState } from "react";
import "./Navbar.scss";
import { RadioButtons } from "./RadioButtons/RadioButtons";
import { ToggleNavigation } from "./ToggleNavigation/ToggleNavigation";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Avatar, Badge, Space } from "antd";

import { MdOutlineSearch } from "react-icons/md";
const Navbar = () => {
  const { toggleNavigation } = useSelector((state) => state.HomePageReducer);
  const { favoriteMedia } = useSelector((state) => state.MoviePageReducer);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const storedFavoriteMediaList = JSON.parse(
    localStorage.getItem("favoriteMedia")
  );

  const motionSettings = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 1 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  return (
    <nav
      className={`navbar_container ${
        scrollY > 0 || toggleNavigation ? "black" : ""
      }`}
    >
      <Link to={`/`} className="wave_logo">
        <motion.h2 {...motionSettings}>
          Movie<span>Wave</span>
        </motion.h2>
      </Link>
      <div className="buttons_container">
        <RadioButtons />
      </div>
      <div className="search_favorites_container">
        <div className="navbar_tools">
          <Link to="/search">
            <motion.div {...motionSettings}>
              <MdOutlineSearch size={38} />
            </motion.div>
          </Link>
          <Link to={"/favorites"}>
            <motion.div {...motionSettings}>
              <Badge
                size="small"
                offset={[-1, 6]}
                count={
                  storedFavoriteMediaList
                    ? storedFavoriteMediaList.length
                    : null
                }
              >
                <FaRegHeart color="white" size={35} />
              </Badge>
            </motion.div>
          </Link>
          <ToggleNavigation />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
