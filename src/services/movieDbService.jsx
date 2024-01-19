import { useHttp } from "./http.hook";
import { APIKEY } from "./apiKey";
import { GetUrl } from "./getUrl";

const movieDbService = () => {
  const { request } = useHttp();
  const { topRatedMovies } = GetUrl();

  const getTopRatedMovies = async (selectedApi = topRatedMovies) => {
    const res = await request(selectedApi);
    console.log(res);
    const result = res.results.map(_transferTopRatedMovies);
    console.log(result);
  };

  const _transferTopRatedMovies = (movie) => {
    return {
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      background_image: movie.backdrop_path,
      poster: movie.poster_path,
      description: movie.overview,
      vote: movie.vote_average,
      original_title: movie.original_title,
      genres_ids: movie.genre_ids,
    };
  };

  return { getTopRatedMovies };
};

export { movieDbService };
