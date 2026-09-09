import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import roomClassic from "@/assets/room-classic.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import { ActionLink } from "./action-link";
import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

const rooms = [
  {
    name: "Classic Room",
    image: roomClassic,
    alt: "Compact room concept with a double bed, writing desk and warm lamp light",
    description:
      "A compact, restful room for one or two guests — everything you need, nothing you don't.",
    amenities: ["Double bed", "Air conditioning", "Work desk", "Private bathroom"],
    detail:
      "Designed for short work stays: a quiet corner to sleep, a desk to answer a few emails, and a shower that starts the day properly.",
  },
  {
    name: "Deluxe Room",
    image: roomDeluxe,
    alt: "Deluxe room concept with a queen bed, terracotta throw and a rattan armchair",
    description:
      "More room to spread out, with a queen bed and a soft seating corner by the window.",
    amenities: ["Queen bed", "Air conditioning", "Reading chair", "Private bathroom"],
    detail:
      "The middle of the house — bright in the morning, generous with storage, and comfortable enough to settle into for a week.",
  },
  {
    name: "Studio Suite",
    image: roomSuite,
    alt: "Suite concept with a small sitting area and two sofas in warm neutral tones",
    description:
      "A separate sitting area for longer stays, small family trips or hosting a guest.",
    amenities: ["Queen bed", "Sitting area", "Air conditioning", "Private bathroom"],
    detail:
      "The most private option, with space to work, eat and relax without folding the day into one room.",
  },
];

export function Rooms() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section id="rooms" tone="sand" aria-label="Room concepts">
      <Reveal>
        <SectionHeading
          eyebrow="Demo room concepts"
          title="Three ways to stay."
          intro="Illustrative room concepts created for this demo. Rates are shared directly on enquiry."
        />
      </Reveal>

      <ul className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
        {rooms.map((room, i) => {
          const isOpen = open === room.name;
          return (
            <Reveal as="li" key={room.name} delay={i * 120} className="group">
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-6 text-2xl">{room.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {room.description}
              </p>
              <ul className="mt-5 space-y-2 text-[0.78rem] text-muted-foreground">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-px w-4 bg-clay/60" />
                    {a}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : room.name)}
                aria-expanded={isOpen}
                aria-controls={`room-detail-${i}`}
                className="mt-6 inline-flex items-center gap-2 border-b border-clay/40 pb-1 text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-500 hover:border-clay hover:text-accent"
              >
                {isOpen ? (
                  <Minus size={13} strokeWidth={1.5} />
                ) : (
                  <Plus size={13} strokeWidth={1.5} />
                )}
                View Details
              </button>

              <div
                id={`room-detail-${i}`}
                hidden={!isOpen}
                className="mt-5 border-l border-clay/30 pl-4 text-sm leading-relaxed text-muted-foreground"
              >
                {room.detail}
              </div>
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <ActionLink href="#enquiry">Make an Enquiry</ActionLink>
        <ActionLink href="#gallery" variant="outline">
          See the Gallery
        </ActionLink>
      </Reveal>
    </Section>
  );
}
