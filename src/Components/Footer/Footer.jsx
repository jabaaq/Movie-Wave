import "./Footer.scss";
import SocialMedias from "./SocialMedias/SocialMedias";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <h2>
          Movie<span>Wave</span>
        </h2>
        <SocialMedias />
      </div>
    </footer>
  );
};

export default Footer;
