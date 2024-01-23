import { useHttp } from "./http.hook";
import { APIKEY } from "./apiKey";
import { GetUrl } from "./getUrl";
import genres from "../services/genres.json";

const movieDbService = () => {
  const _transferTopRatedMovies = (movie) => {
    const genresIds = genres.genres.map((item) => item.id);
    const matchingGenres = genres.genres.filter((genre) =>
      movie.genre_ids.includes(genre.id)
    );
    const genresNames = matchingGenres.map((item) => item.name);

    return {
      id: movie.id,
      title:
        movie.title.length > 18
          ? movie.title.slice(0, 18) + "..."
          : movie.title,
      release_date: movie.release_date,
      background_image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      poster: movie.poster_path,
      description: movie.overview.slice(0, 150) + "...",
      vote: movie.vote_average,
      original_title: movie.original_title,
      genres: genresNames,
    };
  };

  return { _transferTopRatedMovies };
};
export { movieDbService };
