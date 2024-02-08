import "./ActorsPage.scss";
import ActorInformation from "./ActorInformation/ActorInformation";
import Footer from "../Footer/Footer";
import { fetchActorInformation } from "./ActorsPageSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ActorsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { actorId } = params;

  useEffect(() => {
    console.log(actorId);
  }, []);

  useEffect(() => {
    //To fetch actor information
    dispatch(fetchActorInformation({ actorId }));
  }, []);

  return (
    <>
      <ActorInformation />
      <Footer />
    </>
  );
};

export default ActorsPage;
