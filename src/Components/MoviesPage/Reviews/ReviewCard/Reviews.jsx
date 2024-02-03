import "./Reviews.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Reviews = () => {
  const { fetchedReviews } = useSelector((state) => state.MoviePageReducer);

  useEffect(() => {
    console.log(fetchedReviews);
  }, [fetchedReviews]);

  return (
    <div className="reviews_container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 5,
          stretch: 10,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={2}
        className="mySwiper"
      >
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
