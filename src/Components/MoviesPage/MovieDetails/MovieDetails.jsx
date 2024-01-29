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

  return (
    <div
      className="movie_details_container"
      style={{
        backgroundImage: `url(${
          fetchedMovieById && fetchedMovieById.background_image
        })`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default MovieDetails;
