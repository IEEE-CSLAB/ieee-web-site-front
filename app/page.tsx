import Hero from "@/components/home/hero/Hero";
import EventsSection from "@/components/home/events/EventsSection";
import CommitteesSection from "@/components/home/committees/CommitteesSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start w-full">
        <Hero />
      </section>
      <section className="snap-start w-full min-h-screen flex items-center bg-white">
        <EventsSection />
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
