import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { MainNavigation } from "@/common/components/layout/header/MainNavigation";
import { ModeToggle } from "@/common/components/layout/ModeToggle";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container m-auto flex h-16 items-center gap-x-4 sm:justify-between sm:gap-x-0">
        <div className="flex items-center gap-6 sm:gap-10">
          <Link href="/" className="block">
            <span className="font-bold">FilmFolio</span>
          </Link>
          <p className="hidden text-sm text-muted-foreground md:block">
            Manage your personal movie experience
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-4">
          <nav className="flex items-center gap-x-1">
            {/* 検索フォーム */}
            <div className="hidden md:block">
              <Input
                type="search"
                placeholder="タイトルから映画を探す"
                className="w-52 bg-white lg:w-80"
              />
            </div>
            {/* メインナビゲーション */}
            <MainNavigation />
            {/* モバイル向け検索ボタン */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="size-5" />
              <span className="sr-only">Search</span>
            </Button>
            {/* モード切り替えボタン */}
            <ModeToggle />
            {/* ハンバーガーメニューボタン */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
