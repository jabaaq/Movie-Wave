import { useEffect } from "react";
import "./MovieImages.scss";
import { useSelector } from "react-redux";

const MovieImages = () => {
  const { fetchedImages } = useSelector((state) => state.MoviePageReducer);

  useEffect(() => {
    console.log(fetchedImages);
  }, [fetchedImages]);

  return <h1>Movie Images!</h1>;
};

export default MovieImages;
