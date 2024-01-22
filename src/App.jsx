import { Navbar } from "./Components/HomePage/Navbar/Navbar";
import { MainPageBackground } from "./Components/HomePage/MainPageBackground/MainPageBackground";
import "./App.scss";
import { useHttp } from "./services/http.hook";
import { GenresCategories } from "./Components/HomePage/GenresCategories/GenresCategories";

function App() {
  const { request } = useHttp();

  return (
    <div className="App">
      <Navbar />
      <MainPageBackground />
      <GenresCategories />
    </div>
  );
}

export default App;
