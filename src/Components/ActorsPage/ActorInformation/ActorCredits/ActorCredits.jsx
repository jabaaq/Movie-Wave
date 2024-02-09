import "./ActorCredits.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MediaCard from "../../MediaCard/MediaCard";
import EachPageButton from "../../../HomePage/Navbar/RadioButtons/EachPageButton/EachPageButton";

const ActorCredits = () => {
  const { fetchedActorCredits } = useSelector(
    (state) => state.ActorPageReducer
  );

  useEffect(() => {
    console.log(fetchedActorCredits);
  }, [fetchedActorCredits]);

  return (
    <div className="actor_credits_container">
      <EachPageButton name={`MEDIAS (${fetchedActorCredits.length})`} />
      <div className="actor_media_container">
        {fetchedActorCredits.slice(0, 28).map((media, i) => (
          <MediaCard
            key={i}
            poster={media.poster}
            id={media.id}
            rating={media.rating}
            title={media.title}
            type={media.type}
          />
        ))}
      </div>
    </div>
  );
};

export default ActorCredits;
