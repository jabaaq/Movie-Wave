import "./SocialMedias.scss";
import { SiThemoviedatabase } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const SocialMedias = () => {
  return (
    <div className="card">
      <a
        className="socialContainer containerOne"
        href="https://github.com/jabaaq"
        target="_blank"
      >
        <svg viewBox="0 0 16 16" className="socialSvg github">
          <FaGithub />
        </svg>
      </a>
      <a
        className="socialContainer containerTwo"
        href="mailto:jabaqadagishvili4@gmail.com"
      >
        <svg viewBox="0 0 16 16" className="socialSvg gmail">
          <SiGmail />
        </svg>
      </a>

      <a
        className="socialContainer containerThree"
        href="https://www.linkedin.com/in/jaba-kadagishvili-051753235/"
        target="_blank"
      >
        <svg viewBox="0 0 448 512" className="socialSvg linkedin">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      </a>
      <a
        className="socialContainer containerFour"
        href="https://www.themoviedb.org/"
        target="_blank"
      >
        <svg viewBox="0 0 16 16" className="socialSvg moviedb">
          <SiThemoviedatabase />
        </svg>
      </a>
    </div>
  );
};

export default SocialMedias;
