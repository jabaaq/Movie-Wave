import "./HomePage.scss";
import { MainPageBackground } from "./MainPageBackground/MainPageBackground";
import { UpcomingMovies } from "./UpcomingMovies/UpcomingMovies";
import TvSeries from "./TvShows/TvSeries";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const HomePage = () => {
  const { loadWebsite } = useSelector((state) => state.HomePageReducer);

  return (
    <>
      {loadWebsite ? (
        <>
          <MainPageBackground />
          <UpcomingMovies />
          <TvSeries />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default HomePage;
