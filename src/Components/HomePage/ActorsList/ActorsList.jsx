import { useEffect } from "react";
import { useSelector } from "react-redux";
import SectionBuilder from "../SectionBuilder/SectionBuilder";
import WaveButton from "../WaveButton/WaveButton";

import "./ActorsList.scss";
import { Link } from "react-router-dom";

const ActorsList = () => {
  const { fetchedActorsList } = useSelector((state) => state.HomePageReducer);

  return (
    <>
      <SectionBuilder name={"Actors"} moviesArr={fetchedActorsList} />
      <div className="load_more_button">
        <Link to="/search">
          <WaveButton text={"FIND"} />
        </Link>
      </div>
    </>
  );
};

export default ActorsList;
