import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  variant?: "fade" | "image";
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  variant = "fade",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(variant === "image" ? "image-reveal" : "reveal", className)}
    >
      {children}
    </Tag>
  );
}
