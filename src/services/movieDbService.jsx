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

  const _transferUpcomingMovies = (movie) => {
    return {
      id: movie.id,
      background_image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      genre_ids: movie.genre_ids,
      title: movie.title,
      original_title: movie.original_title,
      poster_img: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      vote_average: movie.vote_average,
    };
  };

  return { _transferTopRatedMovies, _transferUpcomingMovies };
};
export { movieDbService };
