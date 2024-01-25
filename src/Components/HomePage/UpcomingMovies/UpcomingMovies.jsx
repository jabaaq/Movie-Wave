import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../HomePageSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

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
      <h2>Latest Released / Upcoming Movies </h2>
      <div className="upcoming_slider">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {fetchedUpcomingMovies.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="upcoming_slider_content">
                <img
                  src={item.poster_img}
                  alt={item.title}
                  className="upcoming_img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h2>Latest Released / Upcoming Movies </h2>
      <h2>Latest Released / Upcoming Movies </h2>
      <h2>Latest Released / Upcoming Movies </h2>
      <h2>Latest Released / Upcoming Movies </h2>
      <h2>Latest Released / Upcoming Movies </h2>
      <h2>Latest Released / Upcoming Movies </h2>
      <h2>Latest Released / Upcoming Movies </h2>
      <h2>Latest Released / Upcoming Movies </h2>
      <h2>Latest Released / Upcoming Movies </h2>
    </>
  );
};

export { UpcomingMovies };
