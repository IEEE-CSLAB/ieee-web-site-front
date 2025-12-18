import CommitteesPage from "@/components/committees/CommitteesPage";
import { fetchCommittees } from "@/lib/services/committeesApi";

export default async function Committees() {
  const committees = await fetchCommittees();
  return <CommitteesPage committees={committees} />;
}
