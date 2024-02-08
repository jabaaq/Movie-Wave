import { useEffect } from "react";
import "./ActorInformation.scss";
import { useSelector } from "react-redux";

const ActorInformation = () => {
  const { fetchedActorInformation } = useSelector(
    (state) => state.ActorPageReducer
  );

  useEffect(() => {
    console.log(fetchedActorInformation);
  }, [fetchedActorInformation]);

  return (
    <div className="actor_details_container">
      <h1>Hello world!</h1>
    </div>
  );
};

export default ActorInformation;
