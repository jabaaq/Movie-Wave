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

  let initialMovies = 0;

  useEffect(() => {
    if (fetchedActorCredits.length <= 32) {
      initialMovies = Math.floor(fetchedActorCredits.length);
      setMovieCount(initialMovies);
    } else {
      initialMovies = Math.floor(fetchedActorCredits.length / 4);
      setMovieCount(initialMovies);
    }
  }, [fetchedActorCredits]);

  const [movieCount, setMovieCount] = useState(initialMovies);

  const handleIncreaseMovieCount = () => {
    setMovieCount(movieCount + 8);
  };

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
            release_date={media.release_date}
          />
        ))}
      </div>
      <span
        className={`load_more_button ${
          movieCount >= fetchedActorCredits.length ? "hide" : ""
        }`}
        onClick={handleIncreaseMovieCount}
      >
        <WaveButton text={"LOAD MORE"} />
      </span>
    </div>
  );
};

export default ActorCredits;
