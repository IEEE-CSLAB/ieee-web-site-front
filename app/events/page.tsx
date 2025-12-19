import EventsPage from "@/components/events/EventsPage";
import { fetchEvents } from "@/lib/services/eventsApi";
import { fetchCommittees } from "@/lib/services/committeesApi";

export default async function Events() {
  const [events, committees] = await Promise.all([
    fetchEvents(),
    fetchCommittees(),
  ]);

  return <EventsPage events={events} committees={committees} />;
}
