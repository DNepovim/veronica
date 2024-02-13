import { PagesTeamTeamsMembers } from "@/tina/__generated__/types";
import Image from "next/image";
import { RichText } from "./RichText";

export const Member: React.FC<PagesTeamTeamsMembers> = ({ image, name, text }) => (
  <div key={name} className="flex flex-col items-start gap-4 md:flex-row">
    {image && <Image src={image} width={350} height={350} alt={name} className="rounded-xl" layout="" sizes="" />}
    <div className="flex flex-col gap-4">
      <h2 className="bold inline-block self-end rounded-def bg-black px-6 pt-1 text-2xl text-white">{name}</h2>
      <RichText content={text} />
    </div>
  </div>
);
