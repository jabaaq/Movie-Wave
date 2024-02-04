import "./MainPageBackground.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import WaveButton from "../WaveButton/WaveButton";
import { selectMediaId } from "../HomePageSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MainPageBackground = () => {
  const { fetchedBackgroundMovies } = useSelector(
    (state) => state.HomePageReducer
  );
  const dispatch = useDispatch();

  return (
    <div className="background_container">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {fetchedBackgroundMovies.map((movie, i) => {
          const { id, mediaType } = movie;
          return (
            <SwiperSlide key={i}>
              <div className="slide_content">
                <h1 className="movie_title">{movie.title}</h1>
                <div className="movie_combined_information">
                  <div className="movie_rate">
                    <CircularProgress
                      variant="determinate"
                      value={movie.vote.toFixed(2) * 10}
                      size={70}
                      color="success"
                      className="circle_rate"
                    />
                    <h3>{movie.vote.toFixed(1)}</h3>
                  </div>
                  <div className="genres_list">
                    {movie.genres.map((item, i) => (
                      <button className="movie_genre" key={i}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="movie_description">{movie.description}</div>
                <Link
                  to={`/movie-wave/${mediaType}/${id}`}
                  onClick={() => dispatch(selectMediaId({ id, mediaType }))}
                >
                  <WaveButton text={"WATCH NOW"} />
                </Link>
              </div>
              <div className="left_shadows_box"></div>
              <div className="bottom_shadows_box"></div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.background_image}`}
                className="slider_image"
                alt={`Movie background ${i}`}
                loading="lazy"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export { MainPageBackground };
