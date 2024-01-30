import "./MovieDetails.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import { CircularProgress } from "@mui/material";

const MovieDetails = () => {
  const { selectedMediaId } = useSelector((state) => state.HomePageReducer);
  const { fetchedMovieById } = useSelector((state) => state.MoviePageReducer);

  // useEffect(() => {
  //   console.log(selectedMediaId);
  //   console.log(fetchedMovieById);
  // }, [fetchedMovieById]);

  return (
    <div
      className="movie_details_container"
      style={{
        backgroundImage: `url(${
          fetchedMovieById && fetchedMovieById.background_image
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* {fetchedMovieById && <DetailsCard poster={fetchedMovieById.poster} />} */}
      {fetchedMovieById && (
        <div className="information_container">
          {/* <img  className="poster_left_side"></img> */}
          <img
            src={fetchedMovieById.poster}
            alt={fetchedMovieById.title}
            className="poster_left_side"
          />
          <div className="details_right_side">
            <h1>{fetchedMovieById.original_title}</h1>
            <div className="rate_and_genres_container">
              <div className="movie_rate">
                <CircularProgress
                  variant="determinate"
                  value={fetchedMovieById.vote_average * 10}
                  size={50}
                  color="success"
                  className="circle_rate"
                />
                <p>{fetchedMovieById.vote_average}</p>
              </div>
              <div className="genres_list">
                {fetchedMovieById.genres &&
                  fetchedMovieById.genres.map((item, i) => (
                    <button className="movie_genre" key={i}>
                      {item.name}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
