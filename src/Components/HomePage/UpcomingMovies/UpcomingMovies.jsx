import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../HomePageSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import MovieCard from "./MoiveCard/MovieCard";

import "./UpcomingMovies.scss";

const UpcomingMovies = () => {
  const { fetchedUpcomingMovies } = useSelector(
    (state) => state.HomePageReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, []);

  useEffect(() => {
    console.log(fetchedUpcomingMovies);
  }, [fetchedUpcomingMovies]);

  return (
    <>
      <h2 className="upcoming_page_title">Latest Released / Upcoming Movies</h2>
      <div className="upcoming_slider">
        <Swiper
          slidesPerView={6}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {fetchedUpcomingMovies.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard title={item.title} poster={item.poster_img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h1>Some Text</h1>
      <h1>Some Text</h1>
      <h1>Some Text</h1>
      <h1>Some Text</h1>
      <h1>Some Text</h1>
    </>
  );
};

export { UpcomingMovies };
