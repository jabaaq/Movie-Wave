import "./EachPageButton.css";

const EachPageButton = ({ name }) => {
  return (
    <button className="button" data-text="Awesome">
      <span className="actual-text">
        &nbsp;<a href="#">{name}</a>&nbsp;
      </span>
      <span aria-hidden="true" className="hover-text">
        &nbsp;<a href="#">{name}</a>&nbsp;
      </span>
    </button>
  );
};

export default EachPageButton;
