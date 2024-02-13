import localFont from "next/font/local";
import "./globals.css";
import { Layout } from "@/components/Layout";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

const PPFormulaFont = localFont({
  src: [
    { weight: "bold", path: "./../fonts/PPFormula-ExtendedBold.woff2" },
    { weight: "normal", path: "./../fonts/PPFormula-SemiCondensedMedium.otf" },
  ],
});

export const metadata: Metadata = {
  authors: [{ name: "Radim Koutný" }, { name: "Dominik Bláha", url: "https://www.dominikblaha.cz" }],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const {
    data: {
      navigation: { items: navigation },
    },
  } = await client.queries.navigation({
    relativePath: "navigation.json",
  });

  return (
    <html lang="cs">
      <body className={PPFormulaFont.className}>
        <Layout
          navigation={navigation?.map((n) => ({
            title: n!.title,
            link: n!.link._sys.filename,
          }))}
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  );
}
