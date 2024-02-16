import { useEffect, useState } from "react";
import "./Navbar.scss";
import { RadioButtons } from "./RadioButtons/RadioButtons";
import { ToggleNavigation } from "./ToggleNavigation/ToggleNavigation";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ClockCircleOutlined } from "@ant-design/icons";
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

  return (
    <nav
      className={`navbar_container ${
        scrollY > 0 || toggleNavigation ? "black" : ""
      }`}
    >
      <Link to={`/`} className="wave_logo">
        <h2>
          Movie<span>Wave</span>
        </h2>
      </Link>
      <div className="buttons_container">
        <RadioButtons />
      </div>
      <div className="search_favorites_container">
        <div className="navbar_tools">
          <Link to="/search">
            <MdOutlineSearch size={35} />
          </Link>
          <Link to={"/favorites"}>
            <Badge
              size="small"
              offset={[-1, 6]}
              count={
                storedFavoriteMediaList ? storedFavoriteMediaList.length : null
              }
            >
              <FaRegHeart color="white" size={35} />
            </Badge>
          </Link>
          <ToggleNavigation />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
