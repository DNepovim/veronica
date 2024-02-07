import { TeamsPage } from "@/components/TeamsPage";
import client from "@/tina/__generated__/client";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function Page({ params }: { params: { slug: string } }) {
  const [currentUrl, activeItem] = params.slug;
  const {
    data: { pages },
  } = await client.queries.pages({
    relativePath: `${currentUrl}.md`,
  });

  if (pages.__typename === "PagesTeam") {
    const filteredTeams = pages.teams?.filter((t): t is Exclude<typeof t, null> => t !== null) ?? [];
    return <TeamsPage teams={filteredTeams} {...{ currentUrl, activeItem }} />;
  }

  const { title, text } = pages;
  return (
    <>
      <h1 className="mb-8 font-bold">{title}</h1>
      <TinaMarkdown content={text} />
    </>
  );
}
