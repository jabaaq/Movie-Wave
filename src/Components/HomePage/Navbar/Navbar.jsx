import { useEffect, useState } from "react";
import "./Navbar.scss";
import { RadioButtons } from "./RadioButtons/RadioButtons";
import { ToggleNavigation } from "./ToggleNavigation/ToggleNavigation";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

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
      <div className="wave_logo">
        <h2>
          Movie<span>Wave</span>
        </h2>
      </div>
      <div className={`buttons_container`}>
        <RadioButtons />
      </div>
      <div className="search_favorites_container">
        <div className="navbar_tools">
          <IoSearch size={30} />
          <MdFavoriteBorder size={30} />
          <ToggleNavigation />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
