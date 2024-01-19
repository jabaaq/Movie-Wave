import { useEffect } from "react";
import { movieDbService } from "../../../services/movieDbService";
import "./MainPageBackground.scss";

const MainPageBackground = () => {
  const { getTopRatedMovies } = movieDbService();

  const onRequest = () => {
    getTopRatedMovies(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=fcebc7b8c3a7dde2e744f7a5bba6b6bb&language=en-US&page=1"
    ).then(onMoviesLoaded);
  };

  const onMoviesLoaded = (movies) => {
    // eslint-disable-next-line no-console
  };

  useEffect(() => {
    onRequest();
  }, []);

  return (
    <div className="background_container">
      <h1>Hello world!</h1>
    </div>
  );
};

export { MainPageBackground };
