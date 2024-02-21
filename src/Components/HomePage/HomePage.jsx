import "./HomePage.scss";
import { MainPageBackground } from "./MainPageBackground/MainPageBackground";
import { UpcomingMovies } from "./UpcomingMovies/UpcomingMovies";
import TvSeries from "./TvSeries/TvSeries";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner/Spinner";
import ActorsList from "./ActorsList/ActorsList";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

  useEffect(() => {
    dispatch(fetchBackgroundImages({ mediaType: "movie" }));
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTvSeries());
    dispatch(fetchActorsList());
  }, []);

  return (
    <>
      {loadWebsite ? (
        <>
          <HelmetProvider>
            <Helmet>
              <meta name="description" content={`MovieWave`} />
              <title>
                MovieWave - Ratings, Reviews, and Where to Watch the Best Movies
                & TV Shows
              </title>
            </Helmet>
            <MainPageBackground mediaArr={fetchedBackgroundMovies} />
            <UpcomingMovies />
            <TvSeries />
            <ActorsList />
          </HelmetProvider>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default HomePage;
