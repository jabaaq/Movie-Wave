import { APIKEY } from "./apiKey";

const GetUrl = () => {
  const topRatedMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
  const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`;
  const popularTvSeries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKEY}`;
  const actorsList = `https://api.themoviedb.org/3/trending/person/week?api_key=${APIKEY}`;
  return { topRatedMovies, upcomingMovies, popularTvSeries, actorsList };
};

export { GetUrl };
