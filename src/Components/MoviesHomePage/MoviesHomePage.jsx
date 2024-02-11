import MediaCard from "../ActorsPage/MediaCard/MediaCard";
import { MainPageBackground } from "../HomePage/MainPageBackground/MainPageBackground";
import EachPageButton from "../HomePage/Navbar/RadioButtons/EachPageButton/EachPageButton";
import "./MoviesHomePage.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchBackgroundImages } from "../HomePage/HomePageSlice";
import { useEffect } from "react";
import { fetchMediaList } from "./MoviesHomePageSlice";
import Spinner from "../Spinner/Spinner";

const MoviesHomePage = () => {
  const { loadMoviesHomePage, fetchedMediaList } = useSelector(
    (state) => state.MediaHomePageReducer
  );
  const { fetchedBackgroundMovies } = useSelector(
    (state) => state.HomePageReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBackgroundImages());
    dispatch(fetchMediaList({ mediaType: "movie" }));
  }, []);

  useEffect(() => {
    console.log(fetchedMediaList);
  }, [fetchedMediaList]);

  return (
    <div className="movies_home_page">
      {loadMoviesHomePage ? (
        <>
          <MainPageBackground mediaArr={fetchedBackgroundMovies} />
          <EachPageButton name={"MOVIES"} />
          <div className="movie_list_container">
            {fetchedMediaList &&
              fetchedMediaList.map((media, i) => (
                <MediaCard
                  key={i}
                  poster={media.poster}
                  id={media.id}
                  rating={media.rating}
                  title={media.title}
                  type={"movie"}
                  release_date={media.release_date}
                />
              ))}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MoviesHomePage;
