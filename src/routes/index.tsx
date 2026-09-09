import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Amenities } from "@/components/site/amenities";
import { Enquiry } from "@/components/site/enquiry";
import { Experience } from "@/components/site/experience";
import { Gallery } from "@/components/site/gallery";
import { Hero } from "@/components/site/hero";
import { Location } from "@/components/site/location";
import { Rooms } from "@/components/site/rooms";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Welcome } from "@/components/site/welcome";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

const title = "Namaste Guest House — Comfortable Stays in Ilupeju, Lagos";
const description =
  "A boutique guest house concept in Ilupeju, Lagos. Simple, comfortable rooms, warm hospitality and easy access to the mainland. Enquire about your stay.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Karla:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Namaste Guest House",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ilupeju",
            addressRegion: "Lagos",
            addressCountry: "NG",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Welcome />
        <Rooms />
        <Experience />
        <Amenities />
        <Gallery />
        <Location />
        <Enquiry />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <Toaster position="bottom-center" />
    </div>
  );
}
