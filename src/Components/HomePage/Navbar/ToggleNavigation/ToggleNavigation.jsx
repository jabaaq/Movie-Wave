import "./ToggleNavigation.css";

const ToggleNavigation = () => {
  return (
    <div className="toggleButton">
      <input id="checkbox2" type="checkbox" />
      <label className="toggle toggle2" htmlFor="checkbox2">
        <div id="bar4" className="bars"></div>
        <div id="bar5" className="bars"></div>
        <div id="bar6" className="bars"></div>
      </label>
    </div>
  );
};

export { ToggleNavigation };
