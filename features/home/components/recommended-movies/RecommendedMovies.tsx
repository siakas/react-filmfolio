import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieList } from "@/features/home/components/movie-list/MovieList";
import type { MovieResponse } from "@/types/movie";

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

  const getMovies = async (url: string) => {
    const res = await axios.get<MovieResponse>(url);
    return res.data.results;
  };

  const { data: nowPlayingData = [] } = useQuery({
    queryKey: ["nowPlaying", requestUrl.nowPlaying],
    queryFn: () => getMovies(requestUrl.nowPlaying),
  });

  const { data: topRatedData = [] } = useQuery({
    queryKey: ["topRated", requestUrl.topRated],
    queryFn: () => getMovies(requestUrl.topRated),
  });

  const { data: upcomingData = [] } = useQuery({
    queryKey: ["upcoming", requestUrl.upcoming],
    queryFn: () => getMovies(requestUrl.upcoming),
  });

  const { data: popularData = [] } = useQuery({
    queryKey: ["popular", requestUrl.popular],
    queryFn: () => getMovies(requestUrl.popular),
  });

  return (
    <>
      <MovieList title="上映中" movies={nowPlayingData} />
      <MovieList title="高評価" movies={topRatedData} />
      <MovieList title="公開予定" movies={upcomingData} />
      <MovieList title="人気作品" movies={popularData} />
    </>
  );
};
