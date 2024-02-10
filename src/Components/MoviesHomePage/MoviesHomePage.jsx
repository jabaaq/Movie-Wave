import MediaCard from "../ActorsPage/MediaCard/MediaCard";
import { MainPageBackground } from "../HomePage/MainPageBackground/MainPageBackground";
import EachPageButton from "../HomePage/Navbar/RadioButtons/EachPageButton/EachPageButton";
import "./MoviesHomePage.scss";
import { useSelector } from "react-redux";

const MoviesHomePage = () => {
  const { fetchedBackgroundMovies } = useSelector(
    (state) => state.HomePageReducer
  );
  return (
    <div className="movies_home_page">
      <MainPageBackground mediaArr={fetchedBackgroundMovies} />
      <EachPageButton name={"MOVIES"} />
      <div className="movie_list_container">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
};

export default MoviesHomePage;
