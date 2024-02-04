import "./MoviePage.scss";
import MovieDetails from "../MovieDetails/MovieDetails";
import {
  fetchMediaDetails,
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
import MoreInformation from "../MoreInformation/MoreInformation";

const MoviePage = () => {
  const { selectedMediaId } = useSelector((state) => state.HomePageReducer);
  const { loadMoviePage } = useSelector((state) => state.MoviePageReducer);
  const dispatch = useDispatch();
  const savedMovieDetails = useParams();
  const mediaType = savedMovieDetails.mediaType;
  const mediaId = +savedMovieDetails.mediaId;

  useEffect(() => {
    console.log(selectedMediaId);
  }, [selectedMediaId]);

  useEffect(() => {
    //To fetch media details
    dispatch(fetchMediaDetails({ mediaId, mediaType }));
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
          <MoreInformation />
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
