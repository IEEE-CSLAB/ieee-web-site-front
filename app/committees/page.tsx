import CommitteesPage from "@/components/committees/CommitteesPage";
import { fetchCommittees } from "@/lib/services/committeesApi";
import { API_URL } from "@/lib/api";

export default async function Committees() {
  const backendCommittees = await fetchCommittees();
  
  // Normalize committee data with logo URLs
  const committees = backendCommittees.map((committee: any) => {
    // Backend may return LogoUrl with or without leading /
    const logoRaw: string | undefined = committee.logoUrl || undefined;
    
    // Ensure path starts with / for proper URL construction
    const image =
      logoRaw && logoRaw.startsWith("http")
        ? logoRaw
        : logoRaw
        ? `${API_URL}${logoRaw.startsWith('/') ? logoRaw : '/' + logoRaw}`
        : "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

    return {
      name: committee.name,
      description: committee.description ?? "",
      members: 0, // Placeholder, backend doesn't provide this
      projects: 0, // Placeholder
      image,
      badge: committee.name.substring(0, 2), // Placeholder
      accentColor: "primary", // Placeholder
      detailText: "", // Placeholder
      detailImage: "", // Placeholder
    };
  });

  return <CommitteesPage committees={committees} />;
}
