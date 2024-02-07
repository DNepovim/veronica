import localFont from "next/font/local";
import "./globals.css";
import { Layout } from "@/components/Layout";
import client from "@/tina/__generated__/client";

const PPFormulaFont = localFont({
  src: [
    { weight: "bold", path: "./../fonts/PPFormula-ExtendedBold.woff2" },
    { weight: "normal", path: "./../fonts/PPFormula-SemiCondensedMedium.otf" },
  ],
});

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
      </body>
    </html>
  );
}
