
import EventDetail from "@/components/events/EventDetail";
import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";
import { fetchEventById } from "@/lib/services/eventsApi";
import { notFound } from "next/navigation";

export default async function EventPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    if (!id) {
        notFound();
    }

    // Fetch data
    // Assuming the API returns the event object directly or I might need to access .data
    // Based on eventsApi.ts: function fetchEventById(id: string) { return apiGet<any>(`/api/Events/${id}`); }
    // apiGet usually returns the JSON response.
    let event;
    try {
        event = await fetchEventById(id);
    } catch (error) {
        console.error("Failed to fetch event:", error);
        notFound();
    }

    if (!event) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pb-12 pt-32 relative">
            <NavbarWrapper />
            <div className="mx-8 bg-gray-100 rounded-2xl p-8 md:p-12">
                <EventDetail event={event} />
            </div>
            <Footer />
        </div>
    );
}
