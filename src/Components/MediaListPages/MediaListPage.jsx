import MediaCard from "../ActorsPage/MediaCard/MediaCard";
import EachPageButton from "../HomePage/Navbar/RadioButtons/EachPageButton/EachPageButton";
import "./MediaListPage.scss";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { Pagination } from "antd";
import { handleChangePageNum } from "./MediaListPageSlice";
import { useEffect } from "react";

const MediaListPage = ({ mediaList, pageNum, mediaType, type }) => {
  const { loadMoviesHomePage } = useSelector(
    (state) => state.MediaHomePageReducer
  );

  const { fetchedBackgroundMovies } = useSelector(
    (state) => state.HomePageReducer
  );

  // useEffect(() => {
  //   console.log(type, fetchedBackgroundMovies);
  // }, [fetchedBackgroundMovies]);

  const dispatch = useDispatch();

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
                showSizeChanger
                defaultCurrent={pageNum}
                total={5000}
                onChange={(page) => dispatch(handleChangePageNum(page))}
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
