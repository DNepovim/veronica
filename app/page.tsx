import client from "@/tina/__generated__/client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { data: siteConfig } = await client.queries.configuration({ relativePath: "siteConfig.json" });

  const { title, description } = siteConfig.configuration;

  return { title, description };
}

export default async function Home() {
  return;
}
