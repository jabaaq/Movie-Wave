import { Navbar } from "../HomePage/Navbar/Navbar";
import "./App.scss";
import HomePage from "../HomePage/HomePage";
import MoviePage from "../MoviesPage/MoviePage/MoviePage";
import { useDispatch } from "react-redux";
import {
  fetchBackgroundImages,
  fetchUpcomingMovies,
  fetchTvSeries,
  fetchActorsList,
} from "../HomePage/HomePageSlice";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBackgroundImages());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTvSeries());
    dispatch(fetchActorsList());
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:movieId" element={<MoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;