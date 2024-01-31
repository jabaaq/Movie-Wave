import { useSelector } from "react-redux";
import "./TvSeries.scss";
import SectionBuilder from "../SectionBuilder/SectionBuilder";

const TvSeries = () => {
  const { fetchedTvSeries } = useSelector((state) => state.HomePageReducer);

  return (
    <SectionBuilder name={"Top Rated Series"} moviesArr={fetchedTvSeries} />
  );
};

export default TvSeries;
