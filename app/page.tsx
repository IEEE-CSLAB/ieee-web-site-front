import Hero from "@/components/home/hero/Hero";
import LocationsGlobe from "@/components/home/locations/LocationsGlobe";
import EventsSection from "@/components/home/events/EventsSection";
import BlogSection from "@/components/home/blog/BlogSection";
import CommitteesSection from "@/components/home/committees/CommitteesSection";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth">
      <section className="snap-start w-full relative">
        <NavbarWrapper />
        <Hero />
      </section>
      <section className="snap-start w-full min-h-screen flex items-center bg-white">
        <LocationsGlobe />
      </section>
      <section className="snap-start w-full min-h-screen flex items-center bg-white">
        <EventsSection />
      </section>
      <section className="snap-start w-full min-h-screen flex items-center bg-white">
        <BlogSection />
      </section>
      <section className="snap-start w-full min-h-screen flex items-center bg-white">
        <CommitteesSection />
      </section>
      <section className="snap-start w-full">
        <Footer />
      </section>
    </main>
  );
}
