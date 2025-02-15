import { Layout } from "@/common/components/layout/Layout";
import { MovieCarouselLayout } from "@/features/home/components/movie-carousel/MovieCarouselLayout";
import { MovieStatsLayout } from "@/features/home/components/movie-stats/MovieStatsLayout";
import { PersonalizedLayout } from "@/features/home/components/personalized/PersonalizedLayout";
import { QuickAccessLayout } from "@/features/home/components/quick-access/QuickAccessLayout";
import { RecommendedMoviesLayout } from "@/features/home/components/recommended-movies/RecommendedMoviesLayout";

export default function Home() {
  return (
    <Layout>
      <main>
        <MovieCarouselLayout />
        <QuickAccessLayout />
        <RecommendedMoviesLayout />
        <PersonalizedLayout />
        <MovieStatsLayout />
      </main>
    </Layout>
  );
}
