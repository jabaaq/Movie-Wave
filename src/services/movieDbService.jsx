import genres from "../services/genres.json";

const movieDbService = () => {
  const genresIds = genres.genres.map((item) => item.id);

  const getGenresData = (media) => {
    const matchingGenres = genres.genres.filter((genre) =>
      media.genre_ids.includes(genre.id)
    );
    const genresNames = matchingGenres.map((item) => item.name);
    return genresNames;
  };

  const _transferTopRatedMovies = (movie) => {
    const genresNames = getGenresData(movie);

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
      mediaType: "movies",
    };
  };

  const _transferUpcomingMovies = (movie) => {
    const genresNames = getGenresData(movie);
    return {
      id: movie.id,
      background_image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      genre_ids: movie.genre_ids,
      genres: genresNames,
      title: movie.title,
      original_title: movie.original_title,
      poster_img: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      fixedVote: (movie.vote_average / 2).toFixed(1),
      vote: movie.vote_average,
      release_date: movie.release_date,
      mediaType: "movies",
    };
  };

  const _transferTvSeries = (series) => {
    const genresNames = getGenresData(series);

    return {
      id: series.id,
      background_image: `https://image.tmdb.org/t/p/original/${series.backdrop_path}`,
      genre_ids: series.genre_ids,
      genres: genresNames,
      title: series.name,
      original_name: series.original_name,
      poster_img: `https://image.tmdb.org/t/p/w500/${series.poster_path}`,
      fixedVote: (series.vote_average / 2).toFixed(1),
      vote: series.vote_average,
      release_date: series.first_air_date,
      mediaType: "series",
    };
  };

  const _transferActorsList = (actor) => {
    return {
      id: actor.id,
      gender: actor.gender,
      name: actor.name,
      popularity: actor.popularity,
      profile_image: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
      media_type: actor.media_type,
      mediaType: "actors",
    };
  };

  const _transferSelectedMovieDetails = (movie) => {
    return {
      id: movie.id,
      background_image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      budget: movie.budget,
      genres: movie.genres,
      homepage: movie.homepage,
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      release_date: movie.release_date,
      runtime: movie.runtime,
      tagline: movie.tagline,
      original_title: movie.original_title,
      title: movie.title,
      description: movie.overview,
      vote_average: +movie.vote_average.toFixed(1),
    };
  };

  const _transferSelectedSeriesDetails = (series) => {
    return {
      id: series.id,
      background_image: `https://image.tmdb.org/t/p/original/${series.backdrop_path}`,
      budget: series.budget,
      genres: series.genres,
      homepage: series.homepage,
      poster: `https://image.tmdb.org/t/p/w500/${series.poster_path}`,
      release_date: series.release_date,
      runtime: series.runtime,
      tagline: series.tagline,
      original_title: series.original_title,
      title: series.name,
      description: series.overview,
      vote_average: +series.vote_average.toFixed(1),
    };
  };

  return {
    _transferTopRatedMovies,
    _transferUpcomingMovies,
    _transferTvSeries,
    _transferActorsList,
    _transferSelectedMovieDetails,
    _transferSelectedSeriesDetails,
  };
};
export { movieDbService };
