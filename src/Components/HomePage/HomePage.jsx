import "./HomePage.scss";
import { MainPageBackground } from "./MainPageBackground/MainPageBackground";
import { UpcomingMovies } from "./UpcomingMovies/UpcomingMovies";
import TvSeries from "./TvSeries/TvSeries";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import ActorsList from "./ActorsList/ActorsList";
import Footer from "../Footer/Footer";

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
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default HomePage;
