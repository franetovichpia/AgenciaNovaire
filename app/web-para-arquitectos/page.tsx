import type { Metadata } from "next";

import { NichePage } from "@/components/niche/niche-page";
import { getNiche } from "@/data/niches";

const niche = getNiche("arquitectos");

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
    type: "website",
  },
};

export default function Page() {
  return <NichePage niche={niche} />;
}
