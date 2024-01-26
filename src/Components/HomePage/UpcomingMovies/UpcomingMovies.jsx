import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../HomePageSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import MovieCard from "./MoiveCard/MovieCard";
import EachPageButton from "../Navbar/RadioButtons/EachPageButton/EachPageButton";

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
      <h2 className="upcoming_page_title">
        <EachPageButton name={"Latest Released / Upcoming Movies"} />
      </h2>
      <div className="upcoming_slider">
        <Swiper
          breakpoints={{
            400: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          spaceBetween={10}
          className="mySwiper"
          grabCursor={true}
        >
          {fetchedUpcomingMovies.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard
                id={item.id}
                title={item.title}
                poster={item.poster_img}
                rating={item.vote_average}
                date={item.release_date}
              />
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
