export const MAIN_NAVIGATION_ITEMS = [
  {
    id: "movies",
    triggerLabel: "映画",
    items: [
      {
        id: "movies-search",
        href: "/movies/search",
        title: "映画を検索",
        description: "キーワードから映画を探す",
      },
      {
        id: "movies-now-playing",
        href: "/movies/now-playing",
        title: "上映中",
        description: "現在劇場で上映中の作品",
      },
      {
        id: "movies-upcoming",
        href: "/movies/upcoming",
        title: "公開予定",
        description: "今後公開される作品をチェック",
      },
      {
        id: "movies-top-rated",
        href: "/movies/top-rated",
        title: "高評価作品",
        description: "評価の高い映画を探す",
      },
    ],
  },
  {
    id: "lists",
    triggerLabel: "マイリスト",
    items: [
      {
        id: "lists-favorites",
        href: "/lists/favorites",
        title: "お気に入り",
        description: "あなたが最も好きな映画",
      },
      {
        id: "lists-watch-later",
        href: "/lists/watch-later",
        title: "あとで観る",
        description: "観たい映画リスト",
      },
      {
        id: "lists-custom",
        href: "/lists/custom",
        title: "カスタムリスト",
        description: "あなたの独自の映画コレクション",
      },
      {
        id: "lists-new",
        href: "/lists/new",
        title: "新規リスト作成",
        description: "新しい映画リストを作成",
      },
    ],
  },
  {
    id: "history",
    triggerLabel: "視聴履歴",
    items: [
      {
        id: "history-recent",
        href: "/history/recent",
        title: "最近観た作品",
        description: "最近視聴した映画",
      },
      {
        id: "history-reviews",
        href: "/history/reviews",
        title: "マイレビュー",
        description: "あなたの映画評価とレビュー",
      },
      {
        id: "history-stats",
        href: "/history/stats",
        title: "統計",
        description: "視聴傾向の分析",
      },
    ],
  },
];
