import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "../HomePage/Navbar/Navbar";
import "./App.scss";
import Spinner from "../Spinner/Spinner";
import MoviesHomePage from "../MoviesHomePage/MoviesHomePage";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const MoviePage = lazy(() => import("../MoviesPage/MoviePage/MoviePage"));
const ActorsPage = lazy(() => import("../ActorsPage/ActorsPage"));

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
            path="/movie-wave/movie"
            element={
              <Suspense fallback={<Spinner />}>
                <MoviesHomePage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
