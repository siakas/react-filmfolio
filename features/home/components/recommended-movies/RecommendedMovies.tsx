import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieList } from "@/features/home/components/movie-list/MovieList";
import type { MovieResponse } from "@/types/movie";

const useMovies = (url: string) => {
  const getMovies = async () => {
    const res = await axios.get<MovieResponse>(url);
    return res.data.results;
  };

  return useQuery({
    queryKey: [url],
    queryFn: getMovies,
  });
};

export const RecommendedMovies = () => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_BASE_URL;
  const LANGUAGE = process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE;

  const requestUrl = {
    nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`,
    topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&page=1`,
    upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&page=1`,
    popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=1`,
  };

  const { data: nowPlayingData = [] } = useMovies(requestUrl.nowPlaying);
  const { data: topRatedData = [] } = useMovies(requestUrl.topRated);
  const { data: upcomingData = [] } = useMovies(requestUrl.upcoming);
  const { data: popularData = [] } = useMovies(requestUrl.popular);

  return (
    <>
      <MovieList title="上映中" movies={nowPlayingData} />
      <MovieList title="高評価" movies={topRatedData} />
      <MovieList title="公開予定" movies={upcomingData} />
      <MovieList title="人気作品" movies={popularData} />
    </>
  );
};
