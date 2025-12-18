import React from 'react';
import EventCard from '../home/events/EventCard';

interface Event {
    id: number;
    title: string;
    description?: string;
    tag?: string;
    image?: string;
    date?: string;
    location?: string;
    link?: string;
    className?: string;
}

interface EventsGridProps {
    events: Event[];
}

const EventsGrid = ({ events }: EventsGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
                <EventCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    tag={event.tag}
                    image={event.image}
                    date={event.date}
                    location={event.location}
                    link={event.link}
                    className={event.className}
                />
            ))}
        </div>
    );
};

export default EventsGrid;

