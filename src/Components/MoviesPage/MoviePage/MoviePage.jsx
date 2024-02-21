import "./MoviePage.scss";
import MovieDetails from "../MovieDetails/MovieDetails";
import {
  fetchMediaDetails,
  fetchCast,
  fetchMediaVideos,
  fetchReviews,
  fetchRecommendations,
  fetchMovieImages,
} from "../MoviePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import Spinner from "../../Spinner/Spinner";
import VideoList from "../VideoList/VideoList";
import Reviews from "../Reviews/ReviewCard/Reviews";
import MoreInformation from "../MoreInformation/MoreInformation";
import Recommendations from "../Recommendations/Recommendations";
import MovieImages from "../MovieImages/MovieImages";

const MoviePage = () => {
  const { loadMoviePage } = useSelector((state) => state.MoviePageReducer);
  const dispatch = useDispatch();
  const savedMovieDetails = useParams();
  const mediaType = savedMovieDetails.mediaType;
  const mediaId = +savedMovieDetails.mediaId;
  const ref = useRef(null);

  const handleScrollToVideos = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    //To fetch media details
    dispatch(fetchMediaDetails({ mediaId, mediaType }));
    //Movie cast:
    dispatch(fetchCast({ mediaId, mediaType }));

    //To fetch videos
    dispatch(fetchMediaVideos({ mediaId, mediaType }));

    //To fetch reviews
    dispatch(fetchReviews({ mediaId, mediaType }));

    //To fetch movie recommendations
    dispatch(fetchRecommendations({ mediaId, mediaType }));

    //To fetch movie images
    dispatch(fetchMovieImages({ mediaId, mediaType }));
  }, [mediaId, mediaType]);

  return (
    <div className="movie_page_container">
      {loadMoviePage ? (
        <>
          <MovieDetails handleScrollToVideos={handleScrollToVideos} />
          <MoreInformation />
          <VideoList ref={ref} />
          <Reviews />
          <MovieImages />
          <Recommendations />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MoviePage;
