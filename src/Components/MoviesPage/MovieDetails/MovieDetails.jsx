import "./MovieDetails.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MovieDetails = () => {
  const { selectedMediaId } = useSelector((state) => state.HomePageReducer);
  const { fetchedMovieById } = useSelector((state) => state.MoviePageReducer);

  useEffect(() => {
    console.log(selectedMediaId);
    console.log(fetchedMovieById);
  }, [fetchedMovieById]);

  return <h1>MOVIE ID: {selectedMediaId}</h1>;
};

export default MovieDetails;
