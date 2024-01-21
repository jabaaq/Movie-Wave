import { useEffect } from "react";
import { movieDbService } from "../../../services/movieDbService";
import "./MainPageBackground.scss";
import { GetUrl } from "../../../services/getUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "../../../assets/images/example.jpg";
import img1 from "../../../assets/images/example1.jpg";
import img2 from "../../../assets/images/example2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchBackgroundImages } from "../HomePageSlice";
import { useHttp } from "../../../services/http.hook";

const MainPageBackground = () => {
  const { topRatedMovies } = GetUrl();
  const { request } = useHttp();

  const dispatch = useDispatch();
  const { fetchedBackgroundMovies } = useSelector(
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
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {fetchedBackgroundMovies.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={`https://image.tmdb.org/t/p/original/${img.background_image}`}
              className="slider_image"
              alt={`Movie background ${i}`}
            />
            {console.log(img.background_image)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { MainPageBackground };
