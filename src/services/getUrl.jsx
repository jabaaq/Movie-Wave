import { APIKEY } from "./apiKey";

const GetUrl = () => {
  const topRatedMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
  const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`;
  const popularTvSeries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKEY}`;
  const actorsList = `https://api.themoviedb.org/3/trending/person/week?api_key=${APIKEY}`;

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

  const actorInformation = (actorId) =>
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${APIKEY}`;

  const actorCredits = (actorId) =>
    `https://api.themoviedb.org/3/person/${actorId}/combined_credits?api_key=${APIKEY}`;

  const mediaList = (mediaType) =>
    `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${APIKEY}&page=1`;

  return {
    topRatedMovies,
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
  };
};

export { GetUrl };
