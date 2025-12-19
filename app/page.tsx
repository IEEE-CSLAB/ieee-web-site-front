import nextDynamic from 'next/dynamic';

export const dynamic = 'force-dynamic';

import Hero from "@/components/home/hero/Hero";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import LocationsWrapper from "@/components/home/locations/LocationsWrapper";

const EventsSection = nextDynamic(() => import("@/components/home/events/EventsSection"));
const BlogSection = nextDynamic(() => import("@/components/home/blog/BlogSection"));
const CommitteesSection = nextDynamic(() => import("@/components/home/committees/CommitteesSection"));

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full relative">
        <NavbarWrapper />
        <Hero />
      </section>
      <section className="w-full bg-white">
        <LocationsWrapper />
      </section>
      <section className="w-full bg-white">
        <EventsSection />
      </section>
      <section className="w-full bg-white">
        <BlogSection />
      </section>
      <section className="w-full bg-white">
        <CommitteesSection />
      </section>
      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
}
