import Hero from "@/components/home/hero/Hero";
import LocationsGlobe from "@/components/home/locations/LocationsGlobe";
import EventsSection from "@/components/home/events/EventsSection";
import BlogSection from "@/components/home/blog/BlogSection";
import CommitteesSection from "@/components/home/committees/CommitteesSection";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full relative">
        <NavbarWrapper />
        <Hero />
      </section>
      <section className="w-full bg-white">
        <LocationsGlobe />
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
