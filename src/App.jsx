import { Navbar } from "./Components/HomePage/Navbar/Navbar";
import "./App.scss";
import HomePage from "./Components/HomePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBackgroundImages,
  fetchUpcomingMovies,
} from "./Components/HomePage/HomePageSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBackgroundImages());
    dispatch(fetchUpcomingMovies());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
