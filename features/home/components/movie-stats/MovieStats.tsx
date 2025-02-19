import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";

export const MovieStats = () => {
  return (
    <div className={"grid gap-4 md:grid-cols-2 lg:grid-cols-3"}>
      <Card>
        <CardHeader className={"pb-2"}>
          <CardTitle className="text-sm font-medium">
            視聴傾向</CardTitle>
        </CardHeader>
             <CardContent>
             {/* Add a simple graph or chart here */}
                <div className="text-2xl font-bold">グラフプレースホルダー</div>
           </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"
        >
          <CardTitle className="text-sm font-medium"
          >今月観た映画
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">15</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">平均評価</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.2 / 5</div>
        </CardContent>
      </Card>
    </div>
  );
};
