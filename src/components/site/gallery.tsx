import commonArea from "@/assets/common-area.jpg";
import dining from "@/assets/dining.jpg";
import hero from "@/assets/hero.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import surroundings from "@/assets/surroundings.jpg";
import { ActionLink } from "./action-link";
import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

const shots = [
  { src: hero, alt: "Guest house exterior at dusk", caption: "Exterior", span: "md:col-span-7", ratio: "aspect-3/2" },
  { src: roomDeluxe, alt: "Deluxe room concept", caption: "Rooms", span: "md:col-span-5", ratio: "aspect-3/2" },
  { src: commonArea, alt: "Courtyard seating area", caption: "Common areas", span: "md:col-span-5", ratio: "aspect-4/5" },
  { src: dining, alt: "Breakfast served on a wooden table", caption: "Dining", span: "md:col-span-7", ratio: "aspect-4/5" },
  { src: surroundings, alt: "Palm-lined residential street in Lagos", caption: "Surroundings", span: "md:col-span-7", ratio: "aspect-3/2" },
  { src: roomSuite, alt: "Suite sitting area concept", caption: "Rooms", span: "md:col-span-5", ratio: "aspect-3/2" },
];

export function Gallery() {
  return (
    <Section id="gallery" tone="sand" aria-label="Gallery">
      <Reveal>
        <SectionHeading
          eyebrow="Gallery"
          title="A look around."
          intro="Demo imagery only — created to illustrate the design. None of these photographs show the actual property."
        />
      </Reveal>

      <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-12 md:gap-5">
        {shots.map((shot, i) => (
          <Reveal
            key={`${shot.caption}-${i}`}
            variant="image"
            delay={(i % 2) * 100}
            className={`group overflow-hidden ${shot.span}`}
          >
            <figure className="relative overflow-hidden">
              <img
                src={shot.src}
                alt={`${shot.alt} (demo image)`}
                loading="lazy"
                className={`w-full object-cover ${shot.ratio} transition-transform duration-1000 ease-out group-hover:scale-[1.05]`}
              />
              <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {shot.caption} &middot; Demo
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <ActionLink href="#rooms" variant="outline">
          Explore the Rooms
        </ActionLink>
      </Reveal>
    </Section>
  );
}
