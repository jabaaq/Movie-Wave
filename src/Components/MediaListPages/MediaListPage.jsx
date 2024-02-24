import MediaCard from "../ActorsPage/MediaCard/MediaCard";
import EachPageButton from "../HomePage/Navbar/RadioButtons/EachPageButton/EachPageButton";
import "./MediaListPage.scss";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { Pagination } from "antd";
import { handleChangePageNum } from "./MediaListPageSlice";

const MediaListPage = ({ mediaList, pageNum, mediaType, type }) => {
  const dispatch = useDispatch();
  const { loadMoviesHomePage } = useSelector(
    (state) => state.MediaHomePageReducer
  );

  const changePageNum = (page) => {
    dispatch(handleChangePageNum(page));
    window.scrollTo({ top: 630, behavior: "smooth" });
  };

  return (
    <div className="movies_home_page">
      {loadMoviesHomePage ? (
        <>
          <div className="section_name">
            <EachPageButton name={mediaType} />
          </div>
          <div className="movie_list_container">
            {mediaList &&
              mediaList[0].map((media, i) => (
                <MediaCard
                  key={i}
                  poster={media.poster}
                  id={media.id}
                  rating={media.rating}
                  title={media.title}
                  type={type}
                  release_date={media.release_date}
                />
              ))}
            <div className="pagination_container">
              <Pagination
                size="medium"
                showSizeChanger
                responsive={true}
                defaultCurrent={pageNum}
                total={5000}
                onChange={(page) => changePageNum(page)}
              />
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MediaListPage;
