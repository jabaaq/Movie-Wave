import "./HomePage.scss";
import { MainPageBackground } from "./MainPageBackground/MainPageBackground";
import { UpcomingMovies } from "./UpcomingMovies/UpcomingMovies";
import TvSeries from "./TvSeries/TvSeries";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner/Spinner";
import ActorsList from "./ActorsList/ActorsList";
import Footer from "../Footer/Footer";
import {
  fetchBackgroundImages,
  fetchUpcomingMovies,
  fetchTvSeries,
  fetchActorsList,
} from "../HomePage/HomePageSlice";
import { useEffect } from "react";

const HomePage = () => {
  const { loadWebsite } = useSelector((state) => state.HomePageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBackgroundImages());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTvSeries());
    dispatch(fetchActorsList());
  }, []);

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
