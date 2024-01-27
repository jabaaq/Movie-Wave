import { useSelector } from "react-redux";
import SectionBuilder from "../SectionBuilder/SectionBuilder";

import "./UpcomingMovies.scss";

const UpcomingMovies = () => {
  const { fetchedUpcomingMovies } = useSelector(
    (state) => state.HomePageReducer
  );

  return (
    <SectionBuilder
      name={"Latest Released / Upcoming Movies"}
      moviesArr={fetchedUpcomingMovies}
    />
  );
};

export { UpcomingMovies };
