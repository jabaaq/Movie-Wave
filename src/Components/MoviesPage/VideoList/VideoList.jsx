import "./VideoList.scss";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import SectionName from "../../HomePage/SectionBuilder/SectionName/SectionName";
import { forwardRef } from "react";

const VideoList = forwardRef((props, ref) => {
  const { fetchedVideos } = useSelector((state) => state.MoviePageReducer);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const intervalId = setInterval(() => {
      console.clear();
    }, 10000);
    return () => {
      setIsMounted(false);
      clearTimeout(intervalId);
    };
  }, [isMounted]);

  return (
    <div
      className="videos_container"
      ref={ref}
      style={{ height: fetchedVideos.length === 0 ? "0vh" : "100vh" }}
    >
      <SectionName name={`VIDEOS (${fetchedVideos.length})`} />

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
              loading="lazy"
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
});

export default VideoList;
