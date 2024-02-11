import MediaCard from "../ActorsPage/MediaCard/MediaCard";
import { MainPageBackground } from "../HomePage/MainPageBackground/MainPageBackground";
import EachPageButton from "../HomePage/Navbar/RadioButtons/EachPageButton/EachPageButton";
import "./MoviesHomePage.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchBackgroundImages } from "../HomePage/HomePageSlice";
import { useEffect } from "react";
import { fetchMediaList } from "./MoviesHomePageSlice";
import Spinner from "../Spinner/Spinner";
import Footer from "../Footer/Footer";
import React from "react";
import { Pagination } from "antd";
import { handleChangePageNum } from "./MoviesHomePageSlice";
import { useParams } from "react-router-dom";

const MoviesHomePage = () => {
  const { loadMoviesHomePage, fetchedMediaList, pageNum } = useSelector(
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

  useEffect(() => {
    console.log(fetchedMediaList);
  }, [fetchedMediaList]);

  return (
    <div className="movies_home_page">
      {loadMoviesHomePage ? (
        <>
          <MainPageBackground mediaArr={fetchedBackgroundMovies} />
          <div className="section_name">
            <EachPageButton name={"MOVIES"} />
          </div>
          <div className="movie_list_container">
            {fetchedMediaList &&
              fetchedMediaList[0].map((media, i) => (
                <MediaCard
                  key={i}
                  poster={media.poster}
                  id={media.id}
                  rating={media.rating}
                  title={media.title}
                  type={"movie"}
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
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MoviesHomePage;
