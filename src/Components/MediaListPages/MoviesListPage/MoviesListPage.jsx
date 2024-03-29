import "./MoviesListPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchBackgroundImages } from "../../HomePage/HomePageSlice";
import { fetchMediaList } from "../MediaListPageSlice";
import MediaListPage from "../MediaListPage";
import { MainPageBackground } from "../../HomePage/MainPageBackground/MainPageBackground";

const MoviesListPage = () => {
  const { fetchedMediaList, pageNum } = useSelector(
    (state) => state.MediaHomePageReducer
  );
  const { fetchedBackgroundMovies } = useSelector(
    (state) => state.HomePageReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBackgroundImages({ mediaType: "movie" }));
    dispatch(fetchMediaList({ mediaType: "movie", pageNum: pageNum }));
  }, [pageNum]);

  return (
    <div className="movies_list_page">
      <MainPageBackground mediaArr={fetchedBackgroundMovies} />
      <MediaListPage
        mediaList={fetchedMediaList}
        pageNum={pageNum}
        mediaType={"MOVIES"}
        type={"movie"}
      />
    </div>
  );
};

export default MoviesListPage;
