import { History, Plus, Search } from "lucide-react";
import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";

export const QuickAccess = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>最近のお気に入り</CardTitle>
          <CardDescription>最近お気に入りに追加した映画</CardDescription>
        </CardHeader>
        <CardContent>{/* Add list of recent favorites here */}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>視聴履歴</CardTitle>
          <CardDescription>最近観た映画</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add list of recently watched movies here */}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>基本機能</CardTitle>
          <CardDescription>よく使う機能</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button variant="outline" className="w-full justify-start">
            <Search className="mr-2 size-4" />
            映画を検索
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Plus className="mr-2 size-4" />
            新規リスト作成
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <History className="mr-2 size-4" />
            視聴記録を追加
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>カスタムリスト</CardTitle>
          <CardDescription>あなたの映画コレクション</CardDescription>
        </CardHeader>
        <CardContent>{/* Add list of custom lists here */}</CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            すべてのリストを表示
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
