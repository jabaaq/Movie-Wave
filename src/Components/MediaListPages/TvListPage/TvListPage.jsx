import "./TvListPage.scss";
import Footer from "../../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBackgroundImages } from "../../HomePage/HomePageSlice";
import { fetchMediaList } from "../MediaListPageSlice";
import { MainPageBackground } from "../../HomePage/MainPageBackground/MainPageBackground";
import MediaListPage from "../MediaListPage";

const TvListPage = () => {
  const { fetchedMediaList, pageNum } = useSelector(
    (state) => state.MediaHomePageReducer
  );
  const { fetchedBackgroundMovies } = useSelector(
    (state) => state.HomePageReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBackgroundImages({ mediaType: "tv" }));
    dispatch(fetchMediaList({ mediaType: "tv", pageNum: pageNum }));
  }, [pageNum]);

  return (
    <div className="tv_list_page">
      <MainPageBackground mediaArr={fetchedBackgroundMovies} />
      <MediaListPage
        mediaList={fetchedMediaList}
        pageNum={pageNum}
        mediaType={"MOVIES"}
        type={"tv"}
      />
      <Footer />
    </div>
  );
};

export default TvListPage;
