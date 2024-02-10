import "./ActorCredits.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MediaCard from "../../MediaCard/MediaCard";
import WaveButton from "../../../HomePage/WaveButton/WaveButton";
import SectionName from "../../../HomePage/SectionBuilder/SectionName/SectionName";

const ActorCredits = () => {
  const { fetchedActorCredits } = useSelector(
    (state) => state.ActorPageReducer
  );
  const [movieCount, setMovieCount] = useState(22);

  const handleIncreaseMovieCount = () => {
    setMovieCount(movieCount + 8);
  };

  useEffect(() => {
    console.log(movieCount);
  }, [movieCount]);

  useEffect(() => {
    console.log(fetchedActorCredits);
  }, [fetchedActorCredits]);

  return (
    <div className="actor_credits_container">
      <SectionName name={`MEDIAS (${fetchedActorCredits.length})`} />
      <div className="actor_media_container">
        {fetchedActorCredits.slice(0, movieCount).map((media, i) => (
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
      <span className="load_more_button" onClick={handleIncreaseMovieCount}>
        <WaveButton text={"LOAD MORE"} />
      </span>
    </div>
  );
};

export default ActorCredits;
