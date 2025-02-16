import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex items-center gap-6 sm:gap-10">
      <Link href="/" className="block">
        <span className="font-bold">FilmFolio</span>
      </Link>
      <p className="hidden text-sm text-muted-foreground md:block">
        Manage your personal movie experience
      </p>
    </div>
  );
};
