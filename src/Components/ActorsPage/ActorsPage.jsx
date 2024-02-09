import "./ActorsPage.scss";
import ActorInformation from "./ActorInformation/ActorInformation";
import Footer from "../Footer/Footer";
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
  const { actorId } = params;

  useEffect(() => {
    //To fetch actor information
    dispatch(fetchActorInformation({ actorId }));

    //To fetch actor credits
    dispatch(fetchActorCredits({ actorId }));
  }, []);

  return (
    <>
      {loadActorPage ? (
        <>
          <ActorInformation />
          <ActorCredits />
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ActorsPage;
