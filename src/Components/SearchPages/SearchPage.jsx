import "./SearchPage.scss";
import RadioOptionButtons from "./RadioOptionButtons/RadioOptionButtons";
import MediaCard from "../ActorsPage/MediaCard/MediaCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMedia } from "./SearchPagesSlice";
import SearchBar from "./SearchBar/Searchbar";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchedMedia } = useSelector((state) => state.SearchPageReducer);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("movie");

  useEffect(() => {
    dispatch(searchMedia({ mediaType: sortBy, mediaName: searchQuery }));
  }, [searchQuery, sortBy]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleGetSearchQuery = (e) => {
    setTimeout(() => {
      setSearchQuery(e.target.value);
    }, 1000);
  };
  const handleGetSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <div className="search_page_container">
        <div className="search_option_buttons">
          <RadioOptionButtons handleGetSortBy={handleGetSortBy} />
        </div>
        <div className="search_container">
          <SearchBar handleGetSearchQuery={handleGetSearchQuery} />
        </div>
        <div className="searched_persons_container">
          {searchedMedia &&
            searchedMedia.map((media, i) => (
              <MediaCard
                key={i}
                id={media.id}
                poster={media.poster}
                title={media.title}
                rating={media.rating}
                release_date={media.release_date}
                type={sortBy}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
