import {
  BedDouble,
  Coffee,
  Car,
  ShieldCheck,
  Snowflake,
  Wifi,
} from "lucide-react";
import { ActionLink } from "./action-link";
import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

const items = [
  { icon: BedDouble, label: "En-suite rooms", note: "Demo placeholder" },
  { icon: Snowflake, label: "Air conditioning", note: "Demo placeholder" },
  { icon: Wifi, label: "Wi-Fi", note: "Demo placeholder" },
  { icon: Coffee, label: "Breakfast on request", note: "Demo placeholder" },
  { icon: Car, label: "On-site parking", note: "Demo placeholder" },
  { icon: ShieldCheck, label: "24-hour reception", note: "Demo placeholder" },
];

export function Amenities() {
  return (
    <Section id="amenities" aria-label="Facilities">
      <Reveal>
        <SectionHeading
          eyebrow="Facilities"
          title="What a stay could include."
          intro="Every item below is an unconfirmed demo placeholder, shown to illustrate how verified facilities would be presented."
        />
      </Reveal>

      <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-20 md:grid-cols-3 md:gap-y-14">
        {items.map(({ icon: Icon, label, note }, i) => (
          <Reveal as="li" key={label} delay={i * 70}>
            <Icon
              size={26}
              strokeWidth={1}
              aria-hidden="true"
              className="text-clay"
            />
            <p className="mt-4 text-sm text-foreground">{label}</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground/70">
              {note}
            </p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-16">
        <ActionLink href="#enquiry" variant="quiet">
          Make an Enquiry
        </ActionLink>
      </Reveal>
    </Section>
  );
}
