import { useEffect } from "react";
import "./CastList.scss";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

const CastList = () => {
  const { fetchedCast } = useSelector((state) => state.MoviePageReducer);

  return (
    <div className="cast_list">
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {fetchedCast.map((cast, i) => (
          <SwiperSlide key={i}>
            <div className="cast_content">
              <div className="cast_name_container">
                <p>{cast.name}</p>
              </div>
              <div className="profile_image">
                <img
                  src={cast.profile_image}
                  alt={cast.name}
                  className="cast_profile_img"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastList;
