import type { ReactNode } from "react";
import { cn } from "@/common/lib/utils";

type Props = {
  bg?: "default" | "muted";
  children: ReactNode;
};

export const SectionContainer = (
  { bg = "default", children }: Props) => {
  return (
    <section className={cn("py-8", bg === "muted" && "bg-muted")}>
    <div className="container m-auto">{children}</div>
    </section>
  );
};
