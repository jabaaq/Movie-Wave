import "./MovieDetails.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MovieDetails = () => {
  const { selectedMediaId } = useSelector((state) => state.HomePageReducer);

  useEffect(() => {
    console.log(selectedMediaId);
  }, [selectedMediaId]);

  return <h1>MOVIE ID: {selectedMediaId}</h1>;
};

export default MovieDetails;
