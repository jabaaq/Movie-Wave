import "./HomePage.scss";
import { MainPageBackground } from "./MainPageBackground/MainPageBackground";
import { UpcomingMovies } from "./UpcomingMovies/UpcomingMovies";
import TvSeries from "./TvSeries/TvSeries";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import ActorsList from "./ActorsList/ActorsList";

const HomePage = () => {
  const { loadWebsite } = useSelector((state) => state.HomePageReducer);

  return (
    <>
      {loadWebsite ? (
        <>
          <MainPageBackground />
          <UpcomingMovies />
          <TvSeries />
          <ActorsList />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default HomePage;
