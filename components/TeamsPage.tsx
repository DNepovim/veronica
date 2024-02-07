import { PagesTeamTeams } from "@/tina/__generated__/types";
import { Team } from "./Team";

export const TeamsPage: React.FC<{ teams: PagesTeamTeams[]; currentUrl: string; activeItem: string }> = ({
  teams,
  currentUrl,
  activeItem,
}) => {
  return (
    teams.length > 0 && (
      <div className="mb-8">
        {teams.map((t) => (
          <Team key={t.name} {...t} {...{ currentUrl, activeItem }} />
        ))}
      </div>
    )
  );
};
