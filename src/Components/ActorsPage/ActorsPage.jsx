import "./ActorsPage.scss";
import ActorInformation from "./ActorInformation/ActorInformation";
import Footer from "../Footer/Footer";
import { fetchActorInformation } from "./ActorsPageSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ActorsPage = () => {
  const { loadActorPage } = useSelector((state) => state.ActorPageReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const { actorId } = params;

  useEffect(() => {
    //To fetch actor information
    dispatch(fetchActorInformation({ actorId }));
  }, []);

  return (
    <>
      {loadActorPage ? (
        <>
          <ActorInformation />
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ActorsPage;
