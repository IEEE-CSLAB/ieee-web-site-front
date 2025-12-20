import CommitteesPage from "@/components/committees/CommitteesPage";
import { fetchCommittees } from "@/lib/services/committeesApi";
import { API_URL } from "@/lib/api";

export default async function Committees() {
  const backendCommittees = await fetchCommittees();
  
  // Normalize committee data with logo URLs
  const committees = backendCommittees.map((committee: any) => {
    // Normalize logo URL (handle Supabase URLs and relative paths)
    const logoRaw: string | undefined = committee.logoUrl || undefined;
    let image: string;
    if (!logoRaw) {
      image = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
    } else if (logoRaw.startsWith("http")) {
      // Already a full URL (Supabase)
      image = logoRaw;
    } else if (logoRaw.startsWith("/http")) {
      // Remove leading slash from full URL (e.g., "/https://...")
      image = logoRaw.substring(1);
    } else {
      // Relative path, prepend API_URL
      image = `${API_URL}${logoRaw.startsWith('/') ? logoRaw : '/' + logoRaw}`;
    }

    // Use the same image for both card and detail
    const detailImage = image;

    return {
      name: committee.name,
      description: committee.description ?? "",
      members: 0, // Placeholder, backend doesn't provide this
      projects: 0, // Placeholder
      image,
      badge: committee.name.substring(0, 2).toUpperCase(),
      accentColor: "primary",
      detailText: committee.description ?? "Bu komite hakkında daha fazla bilgi yakında eklenecektir.",
      detailImage: detailImage,
    };
  });

  return <CommitteesPage committees={committees} />;
}
