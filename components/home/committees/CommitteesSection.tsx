import React from "react";
import CommitteesHeader from "./CommitteesHeader";
import CommitteeCard from "./CommitteeCard";
import JoinCard from "./JoinCard";
import { fetchCommittees } from "@/lib/services/committeesApi";

const CommitteesSection = async () => {
  const backendCommittees = await fetchCommittees();

  const committees = backendCommittees.slice(0, 8).map((committee: any) => ({
    name: committee.name,
    description: committee.description ?? "",
    image: committee.logoUrl as string | undefined,
  }));

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <CommitteesHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {committees.slice(0, 2).map((committee, index) => (
            <CommitteeCard key={index} {...committee} />
          ))}
          <JoinCard />
          {committees.slice(2).map((committee, index) => (
            <CommitteeCard key={index + 2} {...committee} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteesSection;
