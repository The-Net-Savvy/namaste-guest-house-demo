import commonArea from "@/assets/common-area.jpg";
import { ActionLink } from "./action-link";
import { Reveal } from "./reveal";
import { Section } from "./section";

const chapters = [
  {
    title: "Comfort",
    copy: "Clean rooms, cool air and a bed that does its job. The basics, done carefully.",
  },
  {
    title: "Hospitality",
    copy: "A small team who remember your name and answer when you need something.",
  },
  {
    title: "Location",
    copy: "Ilupeju keeps you close to the mainland's business districts and easy to reach.",
  },
  {
    title: "Relaxation",
    copy: "A shaded courtyard for the end of the day, away from the traffic and noise.",
  },
];

export function Experience() {
  return (
    <Section id="experience" tone="ink" aria-label="The Namaste experience">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <Reveal variant="image" className="overflow-hidden">
          <img
            src={commonArea}
            alt="Shaded courtyard seating area with wicker chairs and potted palms"
            width={1200}
            height={1500}
            loading="lazy"
            className="aspect-4/5 w-full object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-primary-foreground/60">The stay</p>
            <h2 className="mt-4 max-w-xl text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              Quiet days, easy evenings, a city at your door.
            </h2>
          </Reveal>

          <dl className="mt-12 grid gap-10 sm:grid-cols-2">
            {chapters.map((c, i) => (
              <Reveal key={c.title} delay={i * 110}>
                <dt className="font-display text-xl">{c.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {c.copy}
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-12">
            <ActionLink href="#rooms" variant="onDark">
              Explore the Rooms
            </ActionLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
