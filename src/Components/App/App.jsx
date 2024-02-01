import { Navbar } from "../HomePage/Navbar/Navbar";
import "./App.scss";
import HomePage from "../HomePage/HomePage";
import MoviePage from "../MoviesPage/MoviePage/MoviePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/movie-wave/:mediaType/:mediaId"
            element={<MoviePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
