import "./MoreInformation.scss";
import Accordion from "./Accordion/Accordion";
import { useSelector } from "react-redux";

const MoreInformation = () => {
  const { fetchedMovieById } = useSelector((state) => state.MoviePageReducer);

  const getItems = (panelStyle, movieInfo) => [
    {
      key: "1",
      label: "About",
      children: (
        <ul>
          <li>
            <b>Status:</b> {movieInfo.status}
          </li>
          <li>
            <b>Studio:</b> {movieInfo.studios}
          </li>
          <li>
            <b>Country:</b> {movieInfo.country}
          </li>
          <li>
            <b>Released:</b> {movieInfo.release_date}
          </li>
          {movieInfo.runtime ? (
            <li>
              <b>Runtime:</b> {movieInfo.runtime}
            </li>
          ) : (
            <>
              <li>
                <b>Seasons:</b> {movieInfo.number_of_seasons}
              </li>
              <li>
                <b>Episodes</b> {movieInfo.number_of_episodes}
              </li>
            </>
          )}
          <li>
            <b>Tagline:</b> {movieInfo.tagline}
          </li>
          {movieInfo.budget ? (
            <li>
              <b>Budget:</b> {movieInfo.budget}
            </li>
          ) : null}
          {movieInfo.revenue ? (
            <li>
              <b>Revenue:</b> {movieInfo.revenue}
            </li>
          ) : null}
        </ul>
      ),
      style: panelStyle,
    },
  ];

  return (
    <div className="more_info_container">
      <Accordion getItems={getItems} fetchedMovieById={fetchedMovieById} />
    </div>
  );
};

export default MoreInformation;
