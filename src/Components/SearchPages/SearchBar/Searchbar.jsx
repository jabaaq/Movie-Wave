import "./SearchBar.css";

const SearchBar = ({ handleGetSearchQuery }) => {
  return (
    <div className="container">
      <input
        type="text"
        name="text"
        className="input"
        placeholder="Search MovieWave"
        onChange={handleGetSearchQuery}
      />
    </div>
  );
};

export default SearchBar;
