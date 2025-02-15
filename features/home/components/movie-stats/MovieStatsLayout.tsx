import { MovieStats } from "@/features/home/components/movie-stats/MovieStats";
import { SectionContainer } from "@/features/home/components/SectionContainer";
import { SectionTitle } from "@/features/home/components/SectionTitle";

export const MovieStatsLayout = () => {
  return (
    <SectionContainer bg="muted">
      <SectionTitle title="視聴データ" />
      <MovieStats />
    </SectionContainer>
  );
};
