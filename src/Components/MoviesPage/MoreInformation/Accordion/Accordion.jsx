import "./Accordion.scss";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";

const Accordion = ({ getItems, fetchedMovieById }) => {
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
