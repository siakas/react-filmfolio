import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "@/utils/getMovieList";

export const useGetMovieList = (path: string) => {
  return useQuery({
    queryKey: ["movieList", path],
    queryFn: () => getMovieList(path),
  });
};
