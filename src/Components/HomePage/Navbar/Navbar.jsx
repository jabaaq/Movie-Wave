import "./Navbar.scss";
import { RadioButtons } from "./RadioButtons/RadioButtons";
import { ToggleNavigation } from "./ToggleNavigation/ToggleNavigation";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="wave_logo">
        <h2>MovieWave</h2>
      </div>
      <div className="buttons_container">
        <RadioButtons />
      </div>
      <div className="search_favorites_container">
        <div className="abladabla">
          <IoSearch size={30} />
          <MdFavoriteBorder size={30} />
          <ToggleNavigation />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
