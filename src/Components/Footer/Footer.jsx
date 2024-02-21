import "./Footer.scss";
import SocialMedias from "./SocialMedias/SocialMedias";
import { motion } from "framer-motion";

const Footer = () => {
  const motionSettings = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 1 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  return (
    <footer className="footer_container">
      <motion.h3 {...motionSettings}>
        Movie<span>Wave</span>
      </motion.h3>
      <SocialMedias />
    </footer>
  );
};

export default Footer;
