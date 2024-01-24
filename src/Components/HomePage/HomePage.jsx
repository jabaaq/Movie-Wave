import "./HomePage.scss";
import { MainPageBackground } from "./MainPageBackground/MainPageBackground";
import { GenresCategories } from "./GenresCategories/GenresCategories";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { imagesLoadingStatus } = useSelector((state) => state.HomePageReducer);
  return (
    <>
      <MainPageBackground />
      <GenresCategories />
    </>
  );
};

export default HomePage;
