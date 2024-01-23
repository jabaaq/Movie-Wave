import { Navbar } from "./Components/HomePage/Navbar/Navbar";
import { MainPageBackground } from "./Components/HomePage/MainPageBackground/MainPageBackground";
import "./App.scss";
import { useHttp } from "./services/http.hook";
import Spinner from "./Components/Spinner/Spinner";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const { request } = useHttp();

  return (
    <div className="App">
      <Navbar />
      <HomePage />
      {/* <MainPageBackground />
      <Spinner />
      <GenresCategories /> */}
    </div>
  );
}

export default App;
