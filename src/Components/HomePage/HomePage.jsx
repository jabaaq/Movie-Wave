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
  fetchTvSeries,
  fetchUpcomingMovies,
  fetchActorsList,
} from "../HomePage/HomePageSlice";
import { useEffect } from "react";

const HomePage = () => {
  const { loadWebsite, fetchedBackgroundMovies } = useSelector(
    (state) => state.HomePageReducer
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(fetchedBackgroundMovies);
  // }, [fetchedBackgroundMovies]);

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
          <MainPageBackground mediaArr={fetchedBackgroundMovies} />
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
