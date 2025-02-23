import Link from "next/link";
import { Button } from "@/common/components/ui/button";
import { Card, CardContent } from "@/common/components/ui/card";
import { ScrollArea, ScrollBar } from "@/common/components/ui/scroll-area";
import type { Movie } from "@/types/movie";

type Props = {
  title: string;
  movies: Movie[];
};

export const MovieList = ({ title, movies }: Props) => {
  return (
    <div className="mb-8">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Button variant="link" className="p-0" asChild>
          <Link href="#">もっと見る</Link>
        </Button>
      </div>

      <ScrollArea>
        <div className="flex gap-x-4 pb-4">
          {movies?.map((movie) => (
            <Card
              key={movie.id}
              className="w-[150px] flex-none overflow-hidden border-none"
            >
              <CardContent className="p-0">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/placeholder.svg"
                  }
                  alt={movie.title}
                  className="h-[225px] w-full object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
