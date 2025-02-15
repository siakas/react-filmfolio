import { MainNavigationListItem } from "@/common/components/layout/header/MainNavigationListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/common/components/ui/navigation-menu";

const menuListStyle =
  "grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]";

export const MainNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>映画</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={menuListStyle}>
              <MainNavigationListItem href="/movies/search" title="映画を検索">
                キーワードから映画を探す
              </MainNavigationListItem>
              <MainNavigationListItem href="/movies/now-playing" title="上映中">
                現在劇場で上映中の作品
              </MainNavigationListItem>
              <MainNavigationListItem href="/movies/upcoming" title="公開予定">
                今後公開される作品をチェック
              </MainNavigationListItem>
              <MainNavigationListItem
                href="/movies/top-rated"
                title="高評価作品"
              >
                評価の高い映画を探す
              </MainNavigationListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>マイリスト</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={menuListStyle}>
              <MainNavigationListItem
                href="/lists/favorites"
                title="お気に入り"
              >
                あなたが最も好きな映画
              </MainNavigationListItem>
              <MainNavigationListItem
                href="/lists/watch-later"
                title="あとで観る"
              >
                観たい映画リスト
              </MainNavigationListItem>
              <MainNavigationListItem
                href="/lists/custom"
                title="カスタムリスト"
              >
                あなたの独自の映画コレクション
              </MainNavigationListItem>
              <MainNavigationListItem href="/lists/new" title="新規リスト作成">
                新しい映画リストを作成
              </MainNavigationListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>視聴履歴</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={menuListStyle}>
              <MainNavigationListItem
                href="/history/recent"
                title="最近観た作品"
              >
                最近視聴した映画
              </MainNavigationListItem>
              <MainNavigationListItem
                href="/history/reviews"
                title="マイレビュー"
              >
                あなたの映画評価とレビュー
              </MainNavigationListItem>
              <MainNavigationListItem href="/history/stats" title="統計">
                視聴傾向の分析
              </MainNavigationListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
