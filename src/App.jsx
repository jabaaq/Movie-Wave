import { Navbar } from "./Components/HomePage/Navbar/Navbar";
import { MainPageBackground } from "./Components/HomePage/MainPageBackground/MainPageBackground";
import "./App.scss";
import { useHttp } from "./services/http.hook";
import { useEffect } from "react";

function App() {
  const { request } = useHttp();

  // useEffect(() => {
  //   request(
  //     "https://api.themoviedb.org/3/configuration?api_key=fcebc7b8c3a7dde2e744f7a5bba6b6bb"
  //   ).then((data) => console.log(data));
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <MainPageBackground />
    </div>
  );
}

export default App;
