import EventsPage from '@/components/events/EventsPage';
import fs from 'fs/promises';
import path from 'path';

async function getEvents() {
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export default async function Events() {
  const events = await getEvents();
  return <EventsPage events={events} />;
}
