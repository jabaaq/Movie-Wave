import "./MoviePage.scss";
import MovieDetails from "../MovieDetails/MovieDetails";
import {
  fetchMovieDetails,
  fetchSeriesDetails,
  fetchMovieCast,
} from "../MoviePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import Spinner from "../../Spinner/Spinner";

const MoviePage = () => {
  const { selectedMediaId } = useSelector((state) => state.HomePageReducer);
  const { loadMoviePage } = useSelector((state) => state.MoviePageReducer);
  const dispatch = useDispatch();
  const savedMovieDetails = useParams();
  const isMovie = savedMovieDetails.mediaType === "movies";
  const isSeries = savedMovieDetails.mediaType === "series";

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
  }, []);

  return (
    <div className="movie_page_container">
      {loadMoviePage ? (
        <>
          <MovieDetails />
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MoviePage;
