import "./MovieDetails.scss";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import AddToFavorites from "../AddToFavorites/AddToFavorites";
import WaveButton from "../../HomePage/WaveButton/WaveButton";
import CastList from "../CastList/CastList";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MovieDetails = ({ handleScrollToVideos }) => {
  const { fetchedMovieById } = useSelector((state) => state.MoviePageReducer);

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content={`Information about ${fetchedMovieById.title}`}
        />
        <title>
          {`${
            fetchedMovieById.title
              ? `${fetchedMovieById.title} ${
                  fetchedMovieById.tabData ? fetchedMovieById.tabData : ""
                }`
              : ""
          }`}{" "}
          - MovieWave
        </title>
      </Helmet>
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
        {fetchedMovieById && (
          <div className="information_container">
            <img
              loading="lazy"
              src={fetchedMovieById.poster}
              alt={fetchedMovieById.title}
              className="poster_left_side"
            />
            <div className="details_right_side">
              <h1>
                {fetchedMovieById.title
                  ? fetchedMovieById.title
                  : fetchedMovieById.name}
              </h1>
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
              <div className="movie_description_container">
                {fetchedMovieById.description}
              </div>
              <div className="add_watch_container">
                <AddToFavorites fetchedMovieById={fetchedMovieById} />
                <div
                  className="movie_btn_container"
                  onClick={handleScrollToVideos}
                >
                  <WaveButton text={"WATCH NOW"} />
                </div>
              </div>
              <div className="cast_container">
                <CastList />
              </div>
            </div>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
};

export default MovieDetails;
