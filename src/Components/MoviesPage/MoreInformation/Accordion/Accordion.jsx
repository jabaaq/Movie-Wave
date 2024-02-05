import "./Accordion.scss";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import { useSelector } from "react-redux";

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

const Accordion = () => {
  const { fetchedMovieById } = useSelector((state) => state.MoviePageReducer);
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["0"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{
        background: "rgba(45, 0, 0, 0)",
      }}
      className="accordion"
      items={getItems(panelStyle, fetchedMovieById)}
    />
  );
};

export default Accordion;
