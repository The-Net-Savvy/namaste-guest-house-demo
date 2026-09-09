import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "default",
  "aria-label": ariaLabel,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "sand" | "ink";
  "aria-label"?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "px-6 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36",
        tone === "sand" && "bg-secondary",
        tone === "ink" && "bg-ink text-primary-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl leading-[1.1] sm:text-4xl md:text-5xl">{title}</h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  );
}
