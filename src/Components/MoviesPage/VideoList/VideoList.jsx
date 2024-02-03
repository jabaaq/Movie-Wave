import "./VideoList.scss";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import EachPageButton from "../../HomePage/Navbar/RadioButtons/EachPageButton/EachPageButton";

const VideoList = () => {
  const { fetchedVideos } = useSelector((state) => state.MoviePageReducer);

  return (
    <div className="videos_container">
      <div id="section_header">
        <EachPageButton name={"VIDEOS"} />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {fetchedVideos.map((movie, i) => (
          <SwiperSlide key={i}>
            <iframe
              src={movie.path}
              frameBorder="0"
              height={"100%"}
              width={"80%"}
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoList;
