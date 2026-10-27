import type { Metadata } from "next";

import { NichePage } from "@/components/niche/niche-page";
import { getNiche } from "@/data/niches";

const niche = getNiche("esteticas");

export const metadata: Metadata = {
  title: niche.seoTitle,
  description: niche.seoDescription,
  alternates: {
    canonical: niche.path,
  },
  openGraph: {
    title: `${niche.seoTitle} | Novaire Studio`,
    description: niche.seoDescription,
    url: `https://www.studionovaire.com${niche.path}`,
    siteName: "Novaire Studio",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <NichePage niche={niche} />;
}
