import CommitteesPage from '@/components/committees/CommitteesPage';
import fs from 'fs/promises';
import path from 'path';

async function getCommittees() {
  const filePath = path.join(process.cwd(), 'data', 'committees.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export default async function Committees() {
  const committees = await getCommittees();
  return <CommitteesPage committees={committees} />;
}
