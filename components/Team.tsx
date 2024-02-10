import { PagesTeamTeams } from "@/tina/__generated__/types";
import { webalize } from "@/utils/webalize";
import Link from "next/link";
import React from "react";
import { Member } from "./Member";
import { H2 } from "./Typography";
import { isMemberActive } from "@/utils/isMemberActive";

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
      <div className="mb-8">
        {filteredMembers.map((m, i) => (
          <React.Fragment key={m.name}>
            <Link
              className={`${isMemberActive(m, activeItem) ? "text-white" : ""} text-xl font-bold hover:text-white`}
              href={`/${currentUrl}/${webalize(m.name ?? "")}#${webalize(name ?? "")}`}
            >
              {m.name}
            </Link>
            {i < filteredMembers.length - 1 ? ", " : "."}
          </React.Fragment>
        ))}
      </div>
      {activeItem && filteredMembers.filter((m) => isMemberActive(m, activeItem)).map((m) => <Member key={m.name} {...m} />)}
    </section>
  );
};
