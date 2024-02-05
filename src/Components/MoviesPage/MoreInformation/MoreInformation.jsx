import "./MoreInformation.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Accordion from "./Accordion/Accordion";

const MoreInformation = () => {
  const { fetchedMovieById } = useSelector((state) => state.MoviePageReducer);

  useEffect(() => {
    console.log(fetchedMovieById);
  }, [fetchedMovieById]);

  return <Accordion />;
};

export default MoreInformation;
