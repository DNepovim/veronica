import client from "@/tina/__generated__/client";
import Link from "next/link";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { webalize } from "webalize";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: { pages },
  } = await client.queries.pages({
    relativePath: `${params.slug[0]}.md`,
  });

  if (pages.__typename === "PagesTeam") {
    const { title, members } = pages;
    const member = params.slug[1]
      ? members?.find(({ name }) => webalize(name) === params.slug[1])
      : null;
    return (
      <>
        <h1 className="mb-8 font-bold">{title}</h1>
        {members && (
          <div className="mb-8">
            {members.map(({ name }, index) => (
              <React.Fragment key={name}>
                <Link
                  className={name === member?.name ? "text-white" : ""}
                  href={`/${params.slug[0]}/${webalize(name)}`}
                >
                  {name}
                </Link>
                {index + 1 !== members.length ? ", " : "."}
              </React.Fragment>
            ))}
          </div>
        )}
        {member && (
          <div className="flex gap-4">
            {member.image && (
              <Image
                src={member.image}
                width={300}
                height={300}
                alt={member.name}
                className="rounded-xl"
              />
            )}
            <div className="flex flex-col gap-4">
              <h2 className="bold inline-block self-end rounded-def bg-black px-6 pt-1 text-2xl text-white">
                {member.name}
              </h2>
              <TinaMarkdown content={member.text} />
            </div>
          </div>
        )}
      </>
    );
  }

  const { title, text } = pages;
  return (
    <>
      <h1 className="mb-8 font-bold">{title}</h1>
      <TinaMarkdown content={text} />
    </>
  );
}
