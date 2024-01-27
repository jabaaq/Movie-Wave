import { useSelector } from "react-redux";
import "./TvSeries.scss";
import { useEffect } from "react";

const TvSeries = () => {
  const { fetchedTvSeries } = useSelector((state) => state.HomePageReducer);

  useEffect(() => {
    console.log(fetchedTvSeries);
  }, [fetchedTvSeries]);

  return <h1>TV</h1>;
};

export default TvSeries;
