import "./MoviesListPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBackgroundImages } from "../../HomePage/HomePageSlice";
import { fetchMediaList } from "../MediaListPageSlice";
import MediaListPage from "../MediaListPage";
import { Footer } from "antd/es/layout/layout";

const MoviesListPage = () => {
  const { fetchedMediaList, pageNum } = useSelector(
    (state) => state.MediaHomePageReducer
  );
  const { fetchedBackgroundMovies } = useSelector(
    (state) => state.HomePageReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBackgroundImages());
    dispatch(fetchMediaList({ mediaType: "movie", pageNum: pageNum }));
  }, [pageNum]);

  return (
    <div className="movies_list_page">
      <MediaListPage
        mediaList={fetchedMediaList}
        pageNum={pageNum}
        backgroundImages={fetchedBackgroundMovies}
        mediaType={"MOVIES"}
      />
      <Footer />
    </div>
  );
};

export default MoviesListPage;
