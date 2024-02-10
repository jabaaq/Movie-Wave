import { useEffect } from "react";
import { useSelector } from "react-redux";
import SectionBuilder from "../SectionBuilder/SectionBuilder";
import WaveButton from "../WaveButton/WaveButton";

import "./ActorsList.scss";

const ActorsList = () => {
  const { fetchedActorsList } = useSelector((state) => state.HomePageReducer);

  // useEffect(() => {
  //   console.log(fetchedActorsList);
  // }, [fetchedActorsList]);

  return (
    <>
      <SectionBuilder name={"Actors"} moviesArr={fetchedActorsList} />
      <div className="load_more_button">
        <a href="#">
          <WaveButton text={"FIND"} />
        </a>
      </div>
    </>
  );
};

export default ActorsList;
