import genres from "../services/genres.json";
import blankMale from "../../src/image/blank-male.jpg";
import blankFemale from "../../src/image/blank-female.jpg";
import noImage from "../../src/image/no-image.jpg";

const movieDbService = () => {
  const genresIds = genres.genres.map((item) => item.id);

  const getGenresData = (media) => {
    const matchingGenres = genres.genres.filter((genre) =>
      media.genre_ids.includes(genre.id)
    );
    const genresNames = matchingGenres.map((item) => item.name);
    return genresNames;
  };

  const _transferTrendingMedias = (movie) => {
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
      mediaType: "movie",
    };
  };

  const _transferTrendingTv = (tv) => {
    return {
      id: tv.id,
      title:
        tv.name && tv.name.length > 18
          ? tv.title.slice(0, 18) + "..."
          : tv.title,
      release_date: tv.first_air_date,
      background_image: `https://image.tmdb.org/t/p/original/${tv.backdrop_path}`,
      poster: tv.poster_path,
      description: tv.overview.slice(0, 150) + "...",
      vote: tv.vote_average,
      original_title: tv.original_name,
      mediaType: "tv",
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
      poster_img: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : noImage,
      fixedVote: (movie.vote_average / 2).toFixed(1),
      vote: movie.vote_average,
      release_date: movie.release_date,
      mediaType: "movie",
    };
  };

  const _transferRecommendations = (media, mediaType) => {
    const genresNames = getGenresData(media);
    return {
      id: media.id,
      background_image: `https://image.tmdb.org/t/p/original/${media.backdrop_path}`,
      genre_ids: media.genre_ids,
      genres: genresNames,
      title: media.title ? media.title : media.name,
      original_title: media.original_title,
      poster_img: media.poster_path
        ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
        : noImage,
      fixedVote: (media.vote_average / 2).toFixed(1),
      vote: media.vote_average,
      release_date: media.release_date
        ? media.release_date
        : media.first_air_date,
      mediaType: "movie",
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
      description: series.overview ? series.overview.slice(0, 200) + "..." : "",
      original_name: series.original_name,
      poster_img: series.poster_path
        ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
        : noImage,
      fixedVote: (series.vote_average / 2).toFixed(1),
      vote: series.vote_average,
      release_date: series.first_air_date,
      mediaType: "tv",
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
      mediaType: "person",
    };
  };

  const _transferSelectedMovieDetails = (movie) => {
    return {
      id: movie.id,
      background_image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      genres: movie.genres,
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : noImage,
      release_date: movie.release_date
        ? movie.release_date
        : movie.first_air_date,
      tagline: movie.tagline,
      original_title: movie.original_title,
      title: movie.title ? movie.title : movie.name,
      description: movie.overview,
      vote_average: +movie.vote_average.toFixed(1),
      budget: movie.budget ? "$" + movie.budget : null,
      homepage: movie.homepage,
      runtime: movie.runtime ? movie.runtime + " min" : null,
      revenue: movie.revenue ? "$" + movie.revenue : null,
      studios: movie.production_companies.map((item) => item.name).join(", "),
      status: movie.status,
      country: movie.production_countries.map((item) => item.name),
      number_of_seasons: movie.number_of_seasons,
      number_of_episodes: movie.number_of_episodes,
      mediaType: movie.runtime ? "Movie" : "Tv",
      tabData: `(${
        movie.release_date
          ? movie.release_date.slice(0, 4)
          : movie.first_air_date.slice(0, 4)
      })`,
    };
  };

  const _transferSelectedSeriesDetails = (series) => {
    return {
      id: series.id,
      background_image: `https://image.tmdb.org/t/p/original/${series.backdrop_path}`,
      budget: series.budget,
      genres: series.genres,
      homepage: series.homepage,
      poster: series.poster_path
        ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
        : noImage,
      release_date: series.release_date,
      runtime: series.runtime,
      tagline: series.tagline,
      original_title: series.original_title,
      title: series.name,
      description: series.overview,
      vote_average: +series.vote_average.toFixed(1),
    };
  };

  const _transferMovieCast = (cast) => {
    return {
      id: cast.id,
      character: cast.character,
      name: cast.name,
      profile_image:
        cast.profile_path === null
          ? cast.gender === 2
            ? blankMale
            : blankFemale
          : `https://image.tmdb.org/t/p/w500/${cast.profile_path}`,
      gender: cast.gender,
      mediaType: "person",
    };
  };

  const _transferVideo = (video) => {
    return {
      id: video.id,
      path: `https://www.youtube.com/embed/${video.key}`,
      name: video.name,
      published_at: video.published_at,
      type: video.type,
    };
  };

  const _transferReviews = (id) => {
    return {
      author: id.author,
      content: id.content.length > 250 ? id.content.slice(0, 255) : id.content,
      created_at: id.created_at.slice(0, 10),
      avatar: id.author_details.avatar_path
        ? `https://image.tmdb.org/t/p/w500/${id.author_details.avatar_path}`
        : blankMale,
      rating: id.author_details.rating,
      username: `@${id.author_details.username}`,
      url: id.url,
    };
  };

  const _transferImages = (image) => {
    return {
      image: `https://image.tmdb.org/t/p/original/${image.file_path}`,
    };
  };

  const _transferActorDetails = (actor) => {
    return {
      name: actor.name,
      id: actor.id,
      birthday: actor.birthday,
      deathday: actor.deathday ? ` - ${actor.deathday}` : "",
      biography: actor.biography,
      known_for_department: actor.known_for_department,
      birth_place: actor.place_of_birth,
      known_as: actor.also_known_as,
      profile_image: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
      gender: actor.gender === 2 ? "male" : "female",
    };
  };

  const _transformMediaCards = (media) => {
    return {
      id: media.id,
      title: media.title ? media.title : media.name,
      poster: media.poster_path
        ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
        : noImage,
      rating: (media.vote_average / 2).toFixed(1),
      type: media.media_type,
      release_date: media.release_date
        ? media.release_date
        : media.first_air_date,
    };
  };

  const _transformActorMediaCard = (actor) => {
    return {
      id: actor.id,
      poster: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
        : noImage,
      type: actor.media_type,
      title: actor.name,
    };
  };

  return {
    _transferTrendingMedias,
    _transferTrendingTv,
    _transferUpcomingMovies,
    _transferTvSeries,
    _transferActorsList,
    _transferSelectedMovieDetails,
    _transferSelectedSeriesDetails,
    _transferMovieCast,
    _transferVideo,
    _transferReviews,
    _transferImages,
    _transferRecommendations,
    _transferActorDetails,
    _transformMediaCards,
    _transformActorMediaCard,
  };
};
export { movieDbService };
