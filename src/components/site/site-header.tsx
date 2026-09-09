import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Stay", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#welcome" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#enquiry" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled ? "bg-background/92 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#top"
          className={cn(
            "font-display text-lg leading-none tracking-[0.16em] uppercase transition-colors duration-700",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          Namaste
          <span className="mt-1 block text-[0.55rem] tracking-[0.3em] opacity-70">
            Guest House
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-500",
                scrolled
                  ? "text-muted-foreground hover:text-accent"
                  : "text-primary-foreground/80 hover:text-primary-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "md:hidden transition-colors duration-500",
            scrolled || open ? "text-foreground" : "text-primary-foreground",
          )}
        >
          {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background px-6 pb-8 pt-4 md:hidden"
        >
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
