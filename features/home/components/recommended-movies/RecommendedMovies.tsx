import { MovieList } from "@/features/home/components/movie-list/MovieList";
import { useGetMovieList } from "@/hooks/useGetMovieList";

export const RecommendedMovies = () => {
  const {
    data: nowPlaying,
    isLoading: isLoadingNowPlaying,
    isError: isErrorNowPlaying,
  } = useGetMovieList("/movie/now_playing");

  const {
    data: topRated,
    isLoading: isLoadingTopRated,
    isError: isErrorTopRated,
  } = useGetMovieList("/movie/top_rated");

  const {
    data: upComing,
    isLoading: isLoadingUpComing,
    isError: isErrorUpComing,
  } = useGetMovieList("/movie/upcoming");

  const {
    data: popular,
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
  } = useGetMovieList("/movie/popular");

  return (
    <>
      <MovieList
        title="上映中"
        movies={nowPlaying || []}
        isLoading={isLoadingNowPlaying}
        isError={isErrorNowPlaying}
      />
      <MovieList
        title="高評価"
        movies={topRated || []}
        isLoading={isLoadingTopRated}
        isError={isErrorTopRated}
      />
      <MovieList
        title="公開予定"
        movies={upComing || []}
        isLoading={isLoadingUpComing}
        isError={isErrorUpComing}
      />
      <MovieList
        title="人気作品"
        movies={popular || []}
        isLoading={isLoadingPopular}
        isError={isErrorPopular}
      />
    </>
  );
};
