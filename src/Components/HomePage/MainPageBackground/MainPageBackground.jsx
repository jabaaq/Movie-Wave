import { useEffect } from "react";
import "./MainPageBackground.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBackgroundImages } from "../HomePageSlice";
import { CircularProgress, Switch } from "@mui/material";
import { RiMovie2Fill } from "react-icons/ri";
import Spinner from "../../Spinner/Spinner";

const MainPageBackground = () => {
  const dispatch = useDispatch();
  const { fetchedBackgroundMovies, imagesLoadingStatus } = useSelector(
    (state) => state.HomePageReducer
  );
  useEffect(() => {
    dispatch(fetchBackgroundImages());
  }, []);

  useEffect(() => {
    console.log(fetchedBackgroundMovies);
  }, [fetchedBackgroundMovies]);

  const onMoviesLoaded = (movies) => {
    // eslint-disable-next-line no-console
  };

  return (
    <div className="background_container">
      {imagesLoadingStatus === "loading" ? (
        <Spinner />
      ) : (
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {fetchedBackgroundMovies.map((movie, i) => (
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
                <a href="#">
                  <button className="watch_movie_btn">
                    <span className="text">WATCH NOW</span>
                    <span className="icon">
                      <RiMovie2Fill size={25} />
                    </span>
                  </button>
                </a>
              </div>
              <div className="left_shadows_box"></div>
              <div className="bottom_shadows_box"></div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.background_image}`}
                className="slider_image"
                alt={`Movie background ${i}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export { MainPageBackground };
