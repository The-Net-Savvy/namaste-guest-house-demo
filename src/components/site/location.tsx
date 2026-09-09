import { MapPin, Navigation } from "lucide-react";
import { ActionLink } from "./action-link";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Location() {
  return (
    <Section id="location" aria-label="Location">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow">Location</p>
          <h2 className="mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
            Ilupeju, on the Lagos mainland.
          </h2>
          <address className="mt-8 not-italic text-base leading-relaxed text-muted-foreground">
            <span className="block text-foreground">Namaste Guest House</span>
            Ilupeju
            <br />
            Lagos, Nigeria
            <br />
            <span className="mt-3 block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/70">
              Full street address to be confirmed &middot; demo
            </span>
          </address>
          <div className="mt-10">
            <ActionLink
              href="https://www.google.com/maps/search/?api=1&query=Ilupeju%2C+Lagos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={14} strokeWidth={1.5} aria-hidden="true" />
              Get Directions
            </ActionLink>
          </div>
        </Reveal>

        <Reveal variant="image">
          <div
            role="img"
            aria-label="Map placeholder for Ilupeju, Lagos"
            className="flex aspect-4/3 w-full flex-col items-center justify-center gap-3 border border-border bg-secondary"
          >
            <MapPin size={28} strokeWidth={1} aria-hidden="true" className="text-clay" />
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Map placeholder
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
