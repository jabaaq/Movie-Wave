import { APIKEY } from "./apiKey";

const GetUrl = () => {
  const topRatedMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
  // https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=2
  return { topRatedMovies };
};

export { GetUrl };
