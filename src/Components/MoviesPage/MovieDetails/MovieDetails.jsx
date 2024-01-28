import "./MovieDetails.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MovieDetails = () => {
  const { selectedMedia } = useSelector((state) => state.HomePageReducer);

  useEffect(() => {
    console.log(selectedMedia);
  }, [selectedMedia]);

  return <h1>MOVIE ID: {selectedMedia}</h1>;
};

export default MovieDetails;
