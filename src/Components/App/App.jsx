import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "../HomePage/Navbar/Navbar";
import "./App.scss";
import Spinner from "../Spinner/Spinner";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const MoviePage = lazy(() => import("../MoviesPage/MoviePage/MoviePage"));

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
            path="/movie-wave/:mediaType/:mediaId"
            element={
              <Suspense fallback={<Spinner />}>
                <MoviePage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
