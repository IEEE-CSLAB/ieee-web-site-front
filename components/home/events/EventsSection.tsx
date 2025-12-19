import React from "react";
import EventsHeader from "./EventsHeader";
import EventCard from "./EventCard";
import EventsControls from "./EventsControls";
import { fetchImportantEvents } from "@/lib/services/eventsApi";
import { API_URL } from "@/lib/api";

const EventsSection = async () => {
  let backendEvents: any[] = [];
  try {
    backendEvents = await fetchImportantEvents();
  } catch (error) {
    console.warn("Failed to fetch events:", error);
    backendEvents = [];
  }

  const events = backendEvents.slice(0, 4).map((event: any) => {
    const startDate = event.startDate ? new Date(event.startDate) : null;
    const formattedDate = startDate
      ? startDate.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      : "";

    // Normalize cover image URL (backend returns relative path like "/wwwroot/uploads/...")
    const rawImage = event.coverImageUrl as string | undefined;
    const image =
      rawImage && rawImage.startsWith("http")
        ? rawImage
        : rawImage
          ? `${API_URL}${rawImage}`
          : "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80";

    return {
      title: event.title,
      description: event.description ?? "",
      tag: event.isImportant ? "Önemli" : "Etkinlik",
      image,
      date: formattedDate,
      className: "md:col-span-1",
      link: "/events",
    };
  });

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <EventsHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <EventsControls />
      </div>
    </section>
  );
};

export default EventsSection;
