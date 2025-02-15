import Link from "next/link";
import { Button } from "@/common/components/ui/button";
import { Card, CardContent } from "@/common/components/ui/card";
import { ScrollArea, ScrollBar } from "@/common/components/ui/scroll-area";

type Props = {
  title: string;
};

export const MovieList = ({ title }: Props) => {
  // TODO: API から取得したデータと置き換える
  const movies = [
    { id: "1", title: "Movie 1", poster: "/placeholder.svg" },
    { id: "2", title: "Movie 2", poster: "/placeholder.svg" },
    { id: "3", title: "Movie 3", poster: "/placeholder.svg" },
    { id: "4", title: "Movie 4", poster: "/placeholder.svg" },
    { id: "5", title: "Movie 5", poster: "/placeholder.svg" },
    { id: "6", title: "Movie 6", poster: "/placeholder.svg" },
    { id: "7", title: "Movie 7", poster: "/placeholder.svg" },
    { id: "8", title: "Movie 8", poster: "/placeholder.svg" },
    { id: "9", title: "Movie 9", poster: "/placeholder.svg" },
    { id: "10", title: "Movie 10", poster: "/placeholder.svg" },
    { id: "11", title: "Movie 11", poster: "/placeholder.svg" },
    { id: "12", title: "Movie 12", poster: "/placeholder.svg" },
    { id: "13", title: "Movie 13", poster: "/placeholder.svg" },
    { id: "14", title: "Movie 14", poster: "/placeholder.svg" },
    { id: "15", title: "Movie 15", poster: "/placeholder.svg" },
  ];

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
          {movies.map((movie) => (
            <Card
              key={movie.id}
              className="w-[150px] flex-none overflow-hidden border-none"
            >
              <CardContent className="p-0">
                <img
                  src={movie.poster || "/placeholder.svg"}
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
