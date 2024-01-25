import "./HomePage.scss";
import { MainPageBackground } from "./MainPageBackground/MainPageBackground";
import { UpcomingMovies } from "./UpcomingMovies/UpcomingMovies";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { imagesLoadingStatus } = useSelector((state) => state.HomePageReducer);
  return (
    <>
      <MainPageBackground />
      <UpcomingMovies />
    </>
  );
};

export default HomePage;
