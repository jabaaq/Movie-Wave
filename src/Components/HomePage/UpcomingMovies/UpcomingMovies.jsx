import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import MovieCard from "./MovieCard/MovieCard";
import EachPageButton from "../Navbar/RadioButtons/EachPageButton/EachPageButton";
import SectionBuilder from "../SectionBuilder/SectionBuilder";

import "./UpcomingMovies.scss";

const UpcomingMovies = () => {
  const { fetchedUpcomingMovies } = useSelector(
    (state) => state.HomePageReducer
  );

  useEffect(() => {
    console.log(fetchedUpcomingMovies);
  }, [fetchedUpcomingMovies]);

  return (
    <>
      <SectionBuilder
        name={"Latest Released / Upcoming Movies"}
        moviesArr={fetchedUpcomingMovies}
      />
    </>
  );
};

export { UpcomingMovies };
