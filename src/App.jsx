import { useEffect, useState } from "react";
import { Navbar } from "./Components/HomePage/Navbar/Navbar";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
