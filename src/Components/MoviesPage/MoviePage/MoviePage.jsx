import "./MoviePage.scss";
import MovieDetails from "../MovieDetails/MovieDetails";
import {
  fetchMovieDetails,
  fetchSeriesDetails,
  fetchCast,
  fetchMediaVideos,
  fetchReviews,
} from "../MoviePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import Spinner from "../../Spinner/Spinner";
import VideoList from "../VideoList/VideoList";
import Reviews from "../Reviews/ReviewCard/Reviews";

const MoviePage = () => {
  const { selectedMediaId } = useSelector((state) => state.HomePageReducer);
  const { loadMoviePage } = useSelector((state) => state.MoviePageReducer);
  const dispatch = useDispatch();
  const savedMovieDetails = useParams();
  const isMovie = savedMovieDetails.mediaType === "movie";
  const isSeries = savedMovieDetails.mediaType === "tv";

  useEffect(() => {
    console.log(selectedMediaId);
  }, [selectedMediaId]);

  useEffect(() => {
    if (isMovie) {
      dispatch(fetchMovieDetails(+savedMovieDetails.mediaId));
    } else if (isSeries) {
      dispatch(fetchSeriesDetails(+savedMovieDetails.mediaId));
    } else if (selectedMediaId.length === 0 && isMovie) {
      dispatch(fetchMovieDetails(+savedMovieDetails.mediaId));
    } else {
      dispatch(fetchSeriesDetails(+savedMovieDetails.mediaId));
    }

    const mediaType = savedMovieDetails.mediaType;
    const mediaId = +savedMovieDetails.mediaId;
    //Movie cast:
    dispatch(fetchCast({ mediaId, mediaType }));

    //To fetch videos
    dispatch(fetchMediaVideos({ mediaId, mediaType }));

    //To fetch reviews
    dispatch(fetchReviews({ mediaId, mediaType }));
  }, []);

  return (
    <div className="movie_page_container">
      {loadMoviePage ? (
        <>
          <MovieDetails />
          <VideoList />
          <Reviews />
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MoviePage;
