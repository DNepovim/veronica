import { RichText } from "@/components/RichText";
import { TeamsPage } from "@/components/TeamsPage";
import client from "@/tina/__generated__/client";
import { webalize } from "@/utils/webalize";
import { Metadata } from "next";
import React from "react";

export async function generateStaticParams() {
  const pagesConnection = await client.queries.pagesConnection();
  const pages =
    pagesConnection.data.pagesConnection.edges
      ?.flatMap((p) => {
        if (p?.node?.__typename === "PagesTeam") {
          return [
            { slug: [p?.node?._sys.filename] },
            ...(p?.node?.teams?.flatMap(
              (t) => t?.members?.map((m) => ({ slug: [p?.node?._sys.filename, webalize(m?.name ?? "")] })),
            ) ?? []),
          ];
        }
        return { slug: [p?.node?._sys.filename] };
      })
      .filter((p): p is Exclude<typeof p, null | undefined> => p !== null && p !== undefined) ?? [];

  return pages;
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const [currentUrl, activeItem] = params.slug;

  const { data: siteConfig } = await client.queries.configuration({ relativePath: "siteConfig.json" });

  const { title, description } = siteConfig.configuration;

  const {
    data: { pages },
  } = await client.queries.pages({
    relativePath: `${currentUrl}.md`,
  });

  if (pages.__typename === "PagesTeam") {
    const allMembers =
      pages.teams?.flatMap((t) => t?.members ?? []).filter((m): m is Exclude<typeof m, null> => m !== null) ?? [];
    const activeMember = allMembers.find((m) => webalize(m.name) === activeItem);

    const pageTitle = activeMember ? activeMember.name : pages.title;

    return {
      title: `${pageTitle} | ${title}`,
      description,
    };
  }
  return {
    title: `${pages.title} | ${title}`,
    description,
  };
}

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

  const { text } = pages;
  return <RichText content={text} />;
}
