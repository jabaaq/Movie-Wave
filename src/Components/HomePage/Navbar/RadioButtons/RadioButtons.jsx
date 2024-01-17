import "./RadioButtons.css";

const RadioButtons = () => {
  return (
    <div className="mydict">
      <div>
        <label>
          <input type="radio" name="radio" />
          <span>Home</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Movies&Shows</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Support</span>
        </label>
      </div>
    </div>
  );
};

export { RadioButtons };
