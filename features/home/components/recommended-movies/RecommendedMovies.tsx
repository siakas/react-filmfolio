import { MovieList } from "@/features/home/components/movie-list/MovieList";

export const RecommendedMovies = () => {
  return (
    <>
      <MovieList title="上映中" />
      <MovieList title="高評価" />
      <MovieList title="公開予定" />
      <MovieList title="人気作品" />
    </>
  );
};
