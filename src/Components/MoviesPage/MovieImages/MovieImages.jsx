import "./MovieImages.scss";
import "swiper/css/navigation";

import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SectionName from "../../HomePage/SectionBuilder/SectionName/SectionName";

const MovieImages = () => {
  const { fetchedImages } = useSelector((state) => state.MoviePageReducer);

  return (
    <div className="movie_images_container">
      <SectionName name={`IMAGES (${fetchedImages.length})`} />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 5,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={1}
        className="mySwiper"
      >
        {fetchedImages.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item.image} alt="Movie image" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieImages;
