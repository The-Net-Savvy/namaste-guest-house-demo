const nav = [
  { label: "Stay", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#welcome" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#enquiry" },
];

const social = ["Instagram", "Facebook", "X"];

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-16 text-primary-foreground sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-[0.14em] uppercase">Namaste</p>
          <p className="mt-1 text-[0.6rem] tracking-[0.3em] uppercase text-primary-foreground/60">
            Guest House
          </p>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Ilupeju
            <br />
            Lagos, Nigeria
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-primary-foreground/50">Explore</p>
          <ul className="mt-5 space-y-3">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-primary-foreground/75 transition-colors duration-500 hover:text-primary-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-primary-foreground/50">Follow</p>
          <ul className="mt-5 space-y-3">
            {social.map((s) => (
              <li key={s}>
                <span className="text-sm text-primary-foreground/50">
                  {s} &middot; placeholder
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-primary-foreground/15 pt-6">
        <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/45">
          Demo concept website &middot; Not an official Namaste Guest House site
        </p>
      </div>
    </footer>
  );
}
