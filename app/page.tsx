import Hero from "@/components/home/hero/Hero";
import EventsSection from "@/components/home/events/EventsSection";
import CommitteesSection from "@/components/home/committees/CommitteesSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <EventsSection />
        <CommitteesSection />
      </main>
      <Footer />
    </>
  );
}
