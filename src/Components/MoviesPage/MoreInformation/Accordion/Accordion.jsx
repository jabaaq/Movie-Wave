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
        <li>Status: {movieInfo.status}</li>
        <li>Studio: {movieInfo.studios.join(", ")}</li>
        <li>Country: {movieInfo.country}</li>
        <li>Released: {movieInfo.release_date}</li>
        <li>Runtime: {movieInfo.runtime}</li>
        <li>Tagline: {movieInfo.tagline}</li>
        <li>Budget: {movieInfo.budget}</li>
        <li>Revenue: {movieInfo.revenue}</li>
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
        // background: "rgba(45, 0, 0, 0)",
        background: "white",
      }}
      className="dark_color"
      items={getItems(panelStyle, fetchedMovieById)}
    />
  );
};

export default Accordion;
