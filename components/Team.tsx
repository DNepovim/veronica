import { PagesTeamTeams } from "@/tina/__generated__/types";
import { webalize } from "@/utils/webalize";
import Link from "next/link";
import React from "react";
import { Person } from "./Person";
import { H2 } from "./Typography";

export const Team: React.FC<PagesTeamTeams & { currentUrl: string; activeItem: string }> = ({
  name,
  members,
  currentUrl,
  activeItem,
}) => {
  const filteredMembers = members?.filter((m): m is Exclude<typeof m, null> => m !== null) ?? [];
  return (
    <section className="mb-8">
      <H2 id={webalize(name ?? "")}>{name}</H2>
      {filteredMembers.map((m) => (
        <React.Fragment key={m.name}>
          <Link
            className={activeItem && webalize(m.name) === webalize(activeItem) ? "text-white" : ""}
            href={`/${currentUrl}/${webalize(m.name ?? "")}#${webalize(name ?? "")}`}
          >
            {m.name}
          </Link>
          ,{" "}
        </React.Fragment>
      ))}
      {activeItem &&
        filteredMembers
          .filter((m) => webalize(m?.name ?? "") === webalize(activeItem))
          .map((m) => <Person key={m.name} {...m} />)}
    </section>
  );
};
