import { useEffect } from "react";
import "./ActorsList.scss";
import { useSelector } from "react-redux";
import SectionBuilder from "../SectionBuilder/SectionBuilder";

const ActorsList = () => {
  const { fetchedActorsList } = useSelector((state) => state.HomePageReducer);

  useEffect(() => {
    console.log(fetchedActorsList);
  }, [fetchedActorsList]);

  return <SectionBuilder name={"Actors"} moviesArr={fetchedActorsList} />;
};

export default ActorsList;
