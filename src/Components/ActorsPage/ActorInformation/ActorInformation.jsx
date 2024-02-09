import { useEffect } from "react";
import "./ActorInformation.scss";
import { useSelector } from "react-redux";

const ActorInformation = () => {
  const { fetchedActorInformation } = useSelector(
    (state) => state.ActorPageReducer
  );

  const {
    name,
    birthday,
    deathday,
    biography,
    gender,
    known_for_department,
    birth_place,
    known_as,
    profile_image,
  } = fetchedActorInformation;

  return (
    <div className="actor_page">
      <div className="actor_details_container">
        <div className="actor_profile_image">
          <img src={profile_image} alt={name} loading="lazy" />
          <div className="actor_personal_info">
            <h3>Personal Info</h3>
            <b>Known for</b>
            <p>{known_for_department}</p>
            <b>Gender</b>
            <p>{gender}</p>
            <b>Birthday</b>
            <p>{birthday}</p>
            <b>Place of Birth</b>
            <p>{birth_place}</p>
            <b>Also Known As</b>
            {known_as &&
              known_as.map((item, i) => (
                <ul key={i}>
                  <p>{item}</p>
                </ul>
              ))}
          </div>
        </div>
        <div className="biography_container">
          <h1 className="actor_name">{name}</h1>
          <h3>Biography</h3>
          <div className="actor_biography">{biography}</div>
        </div>
      </div>
    </div>
  );
};

export default ActorInformation;
