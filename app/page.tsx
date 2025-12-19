import dynamic from 'next/dynamic';
import Hero from "@/components/home/hero/Hero";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

// Dynamically import heavy components
const LocationsGlobe = dynamic(() => import("@/components/home/locations/LocationsGlobe"), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-white" />
});

const EventsSection = dynamic(() => import("@/components/home/events/EventsSection"));
const BlogSection = dynamic(() => import("@/components/home/blog/BlogSection"));
const CommitteesSection = dynamic(() => import("@/components/home/committees/CommitteesSection"));

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
