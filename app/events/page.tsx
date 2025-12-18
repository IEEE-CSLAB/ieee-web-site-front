import EventsPage from "@/components/events/EventsPage";
import { fetchEvents } from "@/lib/services/eventsApi";

export default async function Events() {
  const events = await fetchEvents();
  return <EventsPage events={events} />;
}
