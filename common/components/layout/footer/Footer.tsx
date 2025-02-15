import Link from "next/link";
import { ModeToggle } from "@/common/components/layout/ModeToggle";

const textLinkStyle =
  "font-medium underline underline-offset-4 hover:no-underline";

const navs = [
  { name: "About", href: "/about" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container m-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row">
        <p className="text-sm">
          Built by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={textLinkStyle}
          >
            Your Name
          </a>
          . Powered by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={textLinkStyle}
          >
            TMDB
          </a>
          .
        </p>

        <nav className="flex items-center gap-2">
          <ul className="flex gap-4 text-sm">
            {navs.map((nav) => (
              <li key={nav.name}>
                <Link href={nav.href} className="font-medium">
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </nav>
      </div>
    </footer>
  );
};
