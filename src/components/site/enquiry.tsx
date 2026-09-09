import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { ActionLink } from "./action-link";
import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

const schema = z
  .object({
    fullName: z.string().trim().min(2, "Please enter your full name").max(100),
    phone: z
      .string()
      .trim()
      .min(7, "Please enter a reachable phone number")
      .max(24, "Phone number is too long")
      .regex(/^[0-9+()\s-]+$/, "Use digits, spaces, + or - only"),
    email: z.string().trim().email("Please enter a valid email address").max(255),
    arrival: z.string().min(1, "Select your arrival date"),
    departure: z.string().min(1, "Select your departure date"),
    guests: z.string().min(1, "Select the number of guests"),
    message: z.string().trim().max(1000, "Please keep this under 1000 characters"),
  })
  .refine((v) => !v.arrival || !v.departure || v.departure > v.arrival, {
    path: ["departure"],
    message: "Departure must be after arrival",
  });

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "mt-2 w-full border-0 border-b border-border bg-transparent pb-2 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-clay focus:outline-none";
const labelClass = "text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground";

export function Enquiry() {
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    form.reset();
    toast.success("Demo only — no enquiry was sent.", {
      description: "On a live site this would reach the guest house directly.",
    });
  };

  return (
    <Section id="enquiry" tone="sand" aria-label="Reservation enquiry">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Enquire"
            title="Tell us about your stay."
            intro="Share your dates and we'll come back with availability and rates. This demo form does not send anything."
          />
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="space-y-9">
            <div className="grid gap-9 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  placeholder="Your name"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={fieldClass}
                />
                {errors.fullName ? (
                  <p id="fullName-error" className="mt-2 text-xs text-destructive">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={24}
                  placeholder="+234 000 0000 000"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={fieldClass}
                />
                {errors.phone ? (
                  <p id="phone-error" className="mt-2 text-xs text-destructive">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={255}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={fieldClass}
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-xs text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="grid gap-9 sm:grid-cols-3">
              <div>
                <label className={labelClass} htmlFor="arrival">
                  Arrival
                </label>
                <input
                  id="arrival"
                  name="arrival"
                  type="date"
                  aria-invalid={!!errors.arrival}
                  aria-describedby={errors.arrival ? "arrival-error" : undefined}
                  className={fieldClass}
                />
                {errors.arrival ? (
                  <p id="arrival-error" className="mt-2 text-xs text-destructive">
                    {errors.arrival}
                  </p>
                ) : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="departure">
                  Departure
                </label>
                <input
                  id="departure"
                  name="departure"
                  type="date"
                  aria-invalid={!!errors.departure}
                  aria-describedby={errors.departure ? "departure-error" : undefined}
                  className={fieldClass}
                />
                {errors.departure ? (
                  <p id="departure-error" className="mt-2 text-xs text-destructive">
                    {errors.departure}
                  </p>
                ) : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="guests">
                  Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  defaultValue="1"
                  aria-invalid={!!errors.guests}
                  className={fieldClass}
                >
                  {["1", "2", "3", "4", "5+"].map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                maxLength={1000}
                placeholder="Anything we should know?"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${fieldClass} resize-none`}
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-transparent bg-primary px-7 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-500 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Enquire About Your Stay
              </button>
              <ActionLink href="#rooms" variant="quiet">
                Explore the Rooms
              </ActionLink>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
