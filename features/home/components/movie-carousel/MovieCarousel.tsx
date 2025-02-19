import { Card, CardContent } from "@/common/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/common/components/ui/carousel";

export const MovieCarousel = () => {
  // TODO: API から取得したデータと置き換える
  const trendingMovies = [
    { id: 1, title: "Movie 1", backdrop: "/placeholder.svg" },
    { id: 2, title: "Movie 2", backdrop: "/placeholder.svg" },
    {
      id: 3,
      title: "Movie 3",
      backdrop: "/placeholder.svg",
    },
  ];

  return (
    // TODO: カルーセルは shadcn/ui ではない別ライブラリで実装する
    <Carousel className="container mx-auto w-full">
      <CarouselContent>
        {trendingMovies.map((movie) => (
          <CarouselItem key={movie.id}>
            <Card className="overflow-hidden border-none">
              <CardContent className="relative flex aspect-video items-center justify-center p-0">
                <img
                  src={movie.backdrop || "/placeholder.svg"}
                  alt={movie.title}
                  className="size-full object-cover"
                />
                {/* <span className="relative z-10 text-2xl font-semibold text-white">
                  {movie.title}
                </span> */}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
