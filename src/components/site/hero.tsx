import heroImage from "@/assets/hero.jpg";
import { ActionLink } from "./action-link";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[92svh] overflow-hidden">
      <img
        src={heroImage}
        alt="Evening view of the Namaste Guest House entrance, lit walkway and tropical planting"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink/55"
      />

      <div className="mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24">
        <p className="eyebrow text-primary-foreground/75">Ilupeju &middot; Lagos</p>
        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] text-primary-foreground sm:text-6xl lg:text-7xl">
          Feel at Home in Lagos.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/85">
          A comfortable place to stay, rest and experience Lagos.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <ActionLink href="#rooms" variant="solid">
            Explore Your Stay
          </ActionLink>
          <ActionLink href="#enquiry" variant="onDark">
            Make an Enquiry
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
