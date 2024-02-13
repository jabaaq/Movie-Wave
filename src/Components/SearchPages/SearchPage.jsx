import "./SearchPage.scss";
import Footer from "../Footer/Footer";
import SearchBar from "./SearchBar/SearchBar";
import RadioOptionButtons from "./RadioOptionButtons/RadioOptionButtons";
import MediaCard from "../ActorsPage/MediaCard/MediaCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMedia } from "./SearchPagesSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { loadSearchedMedia } = useSelector((state) => state.SearchPageReducer);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    dispatch(searchMedia({ mediaType: "movie", mediaName: "marvel" }));
  }, []);

  const handleGetSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <div className="search_page_container">
        <div className="search_option_buttons">
          <RadioOptionButtons />
        </div>
        <div className="search_container">
          <SearchBar handleGetSearchQuery={handleGetSearchQuery} />
        </div>
        <div className="searched_persons_container">
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
