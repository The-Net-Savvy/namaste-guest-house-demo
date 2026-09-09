import welcomeImage from "@/assets/welcome.jpg";
import { ActionLink } from "./action-link";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Welcome() {
  return (
    <Section id="welcome" aria-label="About Namaste Guest House">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <Reveal variant="image" className="overflow-hidden">
          <img
            src={welcomeImage}
            alt="Guest room with warm linens and daylight through sheer curtains"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-4/5 w-full object-cover"
          />
        </Reveal>

        <Reveal>
          <p className="eyebrow">Welcome</p>
          <h2 className="mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
            A small guest house with a quiet, personal way of hosting.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Namaste Guest House sits on a calm residential street in Ilupeju, minutes from
              the pace of mainland Lagos. Rooms are simple and well kept, the welcome is
              genuine, and nothing here feels like a chain hotel.
            </p>
            <p>
              Whether you are in town for a few nights of work or a longer stay, you are
              looked after by people who know the neighbourhood and are happy to share it.
            </p>
          </div>
          <div className="mt-9">
            <ActionLink href="#experience" variant="quiet">
              Discover Namaste
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
