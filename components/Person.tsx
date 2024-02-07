import { PagesTeamTeamsMembers } from "@/tina/__generated__/types";
import Image from "next/image";
import { RichText } from "./RichText";

export const Person: React.FC<PagesTeamTeamsMembers> = ({ image, name, text }) => {
  return (
    <div key={name} className="flex gap-4">
      {image && <Image src={image} width={300} height={300} alt={name} className="rounded-xl" />}
      <div className="flex flex-col gap-4">
        <h2 className="bold inline-block self-end rounded-def bg-black px-6 pt-1 text-2xl text-white">{name}</h2>
        <RichText content={text} />
      </div>
    </div>
  );
};
