import "./SocialMedias.scss";
import { SiThemoviedatabase } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

const SocialMedias = () => {
  return (
    <div className="card">
      <a className="socialContainer containerOne" href="#">
        <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
          <FaGithub />
        </svg>
      </a>

      <a className="socialContainer containerTwo" href="#">
        <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">
          <SiGmail />
        </svg>
      </a>

      <a className="socialContainer containerThree" href="#">
        <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      </a>

      <a className="socialContainer containerFour" href="#">
        <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">
          <SiThemoviedatabase />
        </svg>
      </a>
    </div>
  );
};

export default SocialMedias;
