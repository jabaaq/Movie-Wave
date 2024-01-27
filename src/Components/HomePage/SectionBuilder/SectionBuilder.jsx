import "./SectionBuilder.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import MovieCard from "../MovieCard/MovieCard";
import EachPageButton from "../Navbar/RadioButtons/EachPageButton/EachPageButton";

const SectionBuilder = ({ moviesArr, name }) => {
  return (
    <>
      <h2 className="upcoming_page_title">
        <EachPageButton name={name} />
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
          {moviesArr.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard
                id={item.id}
                title={item.title ? item.title : item.name}
                poster={item.poster_img ? item.poster_img : item.profile_image}
                rating={item.fixedVote ? item.fixedVote : null}
                date={item.release_date ? item.release_date : null}
                type={item.media_type}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionBuilder;
