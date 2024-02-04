import "./MoreInformation.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MoreInformation = () => {
  const { fetchedMovieById } = useSelector((state) => state.MoviePageReducer);

  useEffect(() => {
    console.log(fetchedMovieById);
  }, [fetchedMovieById]);

  return <h1>Hello world!</h1>;
};

export default MoreInformation;
