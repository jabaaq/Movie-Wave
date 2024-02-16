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
const Favorites = lazy(() => import("../Favorites/Favorites"));

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
            path="/:mediaType/:mediaId"
            element={
              <Suspense fallback={<Spinner />}>
                <MoviePage />
              </Suspense>
            }
          />
          <Route
            path="/person/:personId"
            element={
              <Suspense fallback={<Spinner />}>
                <ActorsPage />
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<Spinner />}>
                <MoviesListPage />
              </Suspense>
            }
          />
          <Route
            path="/tv"
            element={
              <Suspense fallback={<Spinner />}>
                <TvListPage />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<Spinner />}>
                <SearchPage />
              </Suspense>
            }
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<Spinner />}>
                <Favorites />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
