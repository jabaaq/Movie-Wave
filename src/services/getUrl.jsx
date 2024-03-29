import { APIKEY } from "./apiKey";

const GetUrl = () => {
  const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`;
  const popularTvSeries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKEY}`;
  const actorsList = `https://api.themoviedb.org/3/trending/person/week?api_key=${APIKEY}`;

  const trendingMedias = (mediaType) =>
    `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${APIKEY}`;

  const detailsById = (mediaId, mediaType) =>
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${APIKEY}`;

  const castByMedia = (mediaId, mediaType) =>
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${APIKEY}`;

  const mediaVideos = (mediaId, mediaType) => `
  https://api.themoviedb.org/3/${mediaType}/${mediaId}/videos?api_key=${APIKEY}`;

  const reviews = (mediaId, mediaType) => `
  https://api.themoviedb.org/3/${mediaType}/${mediaId}/reviews?api_key=${APIKEY}`;

  const recommendations = (mediaId, mediaType) => `
  https://api.themoviedb.org/3/${mediaType}/${mediaId}/recommendations?api_key=${APIKEY}`;

  const movieImages = (mediaId, mediaType) =>
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}/images?api_key=${APIKEY}`;

  const actorInformation = (personId) =>
    `https://api.themoviedb.org/3/person/${personId}?api_key=${APIKEY}`;

  const actorCredits = (personId) =>
    `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${APIKEY}`;

  const mediaList = (mediaType, pageNum) =>
    `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${APIKEY}&page=${pageNum}`;

  const searchMedia = (mediaType, mediaName) => {
    return `https://api.themoviedb.org/3/search/${mediaType}?query=${mediaName}&api_key=${APIKEY}`;
  };

  const favoritesRecs = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${APIKEY}`;

  return {
    trendingMedias,
    upcomingMovies,
    popularTvSeries,
    actorsList,
    detailsById,
    castByMedia,
    mediaVideos,
    reviews,
    recommendations,
    movieImages,
    actorInformation,
    actorCredits,
    mediaList,
    searchMedia,
    favoritesRecs,
  };
};

export { GetUrl };
