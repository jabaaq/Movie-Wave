import { useEffect } from "react";
import "./HomePage.scss";
import { MainPageBackground } from "./MainPageBackground/MainPageBackground";
import { UpcomingMovies } from "./UpcomingMovies/UpcomingMovies";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const HomePage = () => {
  const { loadWebsite } = useSelector((state) => state.HomePageReducer);

  useEffect(() => {
    console.log(loadWebsite);
  }, [loadWebsite]);

  return (
    <>
      {loadWebsite ? (
        <>
          <MainPageBackground />
          <UpcomingMovies />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default HomePage;
