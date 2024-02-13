import { useEffect, useState } from "react";
import "./Navbar.scss";
import { RadioButtons } from "./RadioButtons/RadioButtons";
import { ToggleNavigation } from "./ToggleNavigation/ToggleNavigation";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { MdOutlineSearch } from "react-icons/md";
const Navbar = () => {
  const { toggleNavigation } = useSelector((state) => state.HomePageReducer);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

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
          <MdFavoriteBorder size={35} />
          <ToggleNavigation />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
