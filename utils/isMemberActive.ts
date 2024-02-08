import { PagesTeamTeamsMembers } from "@/tina/__generated__/types";
import { webalize } from "./webalize";

export const isMemberActive = (member: PagesTeamTeamsMembers, activeItem: string): boolean =>
  webalize(member?.name ?? "") === webalize(activeItem);
