import "./Footer.scss";
import SocialMedias from "./SocialMedias/SocialMedias";

const Footer = () => {
  return (
    <footer className="footer_container">
      <h3>
        Movie<span>Wave</span>
      </h3>
      <SocialMedias />
    </footer>
  );
};

export default Footer;
