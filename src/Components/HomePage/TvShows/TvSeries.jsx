import { useSelector } from "react-redux";
import "./TvSeries.scss";
import { useEffect } from "react";
import SectionBuilder from "../SectionBuilder/SectionBuilder";

const TvSeries = () => {
  const { fetchedTvSeries } = useSelector((state) => state.HomePageReducer);

  useEffect(() => {
    console.log(fetchedTvSeries);
  }, [fetchedTvSeries]);

  return (
    <SectionBuilder name={"Top Rate Series"} moviesArr={fetchedTvSeries} />
  );
};

export default TvSeries;
