import { useHttp } from "./http.hook";
import { APIKEY } from "./apiKey";
import { GetUrl } from "./getUrl";
import { fetchedBackgroundMovies } from "../Components/HomePage/HomePageSlice";
import { useDispatch } from "react-redux";

const movieDbService = () => {
  const { request } = useHttp();
  const { topRatedMovies } = GetUrl();
  // const dispatch = useDispatch();

  // const getTopRatedMovies = async (selectedApi = topRatedMovies) => {
  //   const res = await request(selectedApi);
  //   // console.log(res.results.map(_transferTopRatedMovies));
  //   // dispatch(res.results.map(_transferTopRatedMovies));
  //   return res.results.map(_transferTopRatedMovies);
  // };

  const _transferTopRatedMovies = (movie) => {
    return {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      background_image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      poster: movie.poster_path,
      description: movie.overview,
      vote: movie.vote_average,
      original_title: movie.original_title,
      genres_ids: movie.genre_ids,
    };
  };

  return { _transferTopRatedMovies };
};

export { movieDbService };
