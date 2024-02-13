import "./RadioOptionButtons.css";

const RadioOptionButtons = () => {
  return (
    <div className="radio-input">
      <label>
        <input
          type="radio"
          id="value-1"
          name="value-radio"
          value="movie"
          defaultChecked
        />
        <span>MOVIE</span>
      </label>
      <label>
        <input type="radio" id="value-2" name="value-radio" value="tv" />
        <span>TV</span>
      </label>
      <label>
        <input type="radio" id="value-3" name="value-radio" value="person" />
        <span>PERSON</span>
      </label>
      <span className="selection"></span>
    </div>
  );
};

export default RadioOptionButtons;
