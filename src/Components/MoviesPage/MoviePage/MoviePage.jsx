import "./MoviePage.scss";
import MovieDetails from "../MovieDetails/MovieDetails";
import { fetchMovieDetails } from "../MoviePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MoviePage = () => {
  const { selectedMediaId } = useSelector((state) => state.HomePageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(selectedMediaId));
  }, []);

  return (
    <div className="movie_page_container">
      <MovieDetails />
    </div>
  );
};

export default MoviePage;
