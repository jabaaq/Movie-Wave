import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "../HomePage/Navbar/Navbar";
import "./App.scss";
import Spinner from "../Spinner/Spinner";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const MoviePage = lazy(() => import("../MoviesPage/MoviePage/MoviePage"));
const ActorsPage = lazy(() => import("../ActorsPage/ActorsPage"));
const MoviesListPage = lazy(() =>
  import("../MediaListPages/MoviesListPage/MoviesListPage")
);
const TvListPage = lazy(() =>
  import("../MediaListPages/TvListPage/TvListPage")
);
const SearchPage = lazy(() => import("../SearchPages/SearchPage"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/movie-wave/more/:mediaType/:mediaId"
            element={
              <Suspense fallback={<Spinner />}>
                <MoviePage />
              </Suspense>
            }
          />
          <Route
            path="/movie-wave/actor/:actor/:actorId"
            element={
              <Suspense fallback={<Spinner />}>
                <ActorsPage />
              </Suspense>
            }
          />
          <Route
            path="/movie-wave/movie/pages"
            element={
              <Suspense fallback={<Spinner />}>
                <MoviesListPage />
              </Suspense>
            }
          />
          <Route
            path="/movie-wave/tv/pages"
            element={
              <Suspense fallback={<Spinner />}>
                <TvListPage />
              </Suspense>
            }
          />
          <Route
            path="/movie-wave/search/person"
            element={
              <Suspense fallback={<Spinner />}>
                <SearchPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
