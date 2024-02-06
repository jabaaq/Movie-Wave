import "./Reviews.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import EachPageButton from "../../../HomePage/Navbar/RadioButtons/EachPageButton/EachPageButton";
import { height } from "@mui/system";

const Reviews = () => {
  const { fetchedReviews } = useSelector((state) => state.MoviePageReducer);

  return (
    <div
      className="reviews_container"
      style={{ height: fetchedReviews.length === 0 ? "50vh" : null }}
    >
      <div id="section_header">
        <EachPageButton name={`REVIEWS(${fetchedReviews.length})`} />
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={1}
        className="mySwiper"
      >
        {fetchedReviews.map((item, i) => (
          <SwiperSlide key={i}>
            <ReviewCard
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              data={item.created_at}
              rating={(item.rating / 2).toFixed(1)}
              username={item.username}
              url={item.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
