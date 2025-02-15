import { RecommendedMovies } from "@/features/home/components/recommended-movies/RecommendedMovies";
import { SectionContainer } from "@/features/home/components/SectionContainer";
import { SectionTitle } from "@/features/home/components/SectionTitle";

export const RecommendedMoviesLayout = () => {
  return (
    <SectionContainer bg="muted">
      <SectionTitle title="おすすめ映画" />
      <RecommendedMovies />
    </SectionContainer>
  );
};
