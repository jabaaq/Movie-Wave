import "./MoviePage.scss";
import MovieDetails from "../MovieDetails/MovieDetails";
import { fetchMovieDetails } from "../MoviePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import Spinner from "../../Spinner/Spinner";

const MoviePage = () => {
  const { selectedMediaId } = useSelector((state) => state.HomePageReducer);
  const { loadMoviePage } = useSelector((state) => state.MoviePageReducer);
  const dispatch = useDispatch();
  const savedMovieId = useParams();

  useEffect(() => {
    console.log(loadMoviePage);
  }, [loadMoviePage]);

  useEffect(() => {
    dispatch(
      fetchMovieDetails(
        selectedMediaId ? selectedMediaId : +savedMovieId.movieId
      )
    );
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
