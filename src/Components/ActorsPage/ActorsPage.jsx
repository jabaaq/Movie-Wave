import "./ActorsPage.scss";
import ActorInformation from "./ActorInformation/ActorInformation";
import { fetchActorInformation, fetchActorCredits } from "./ActorsPageSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ActorCredits from "./ActorInformation/ActorCredits/ActorCredits";

const ActorsPage = () => {
  const { loadActorPage } = useSelector((state) => state.ActorPageReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const { personId } = params;

  useEffect(() => {
    // To fetch actor information
    dispatch(fetchActorInformation({ personId }));
    //To fetch actor credits
    dispatch(fetchActorCredits({ personId }));

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {loadActorPage ? (
        <>
          <ActorInformation />
          <ActorCredits />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ActorsPage;
