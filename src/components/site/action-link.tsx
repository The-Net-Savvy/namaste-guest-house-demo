import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "quiet" | "onDark";

const styles: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground hover:bg-accent border border-transparent",
  outline:
    "border border-border text-foreground hover:border-accent hover:text-accent",
  quiet:
    "border-b border-clay/40 pb-1 text-foreground hover:border-clay hover:text-accent",
  onDark:
    "border border-primary-foreground/40 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10",
};

export function ActionLink({
  variant = "solid",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  const isQuiet = variant === "quiet";
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        !isQuiet && "px-7 py-4",
        styles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
