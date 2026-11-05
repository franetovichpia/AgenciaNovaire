import type { Metadata } from "next";

import { ZonePageView } from "@/components/zones/zone-page";
import { getZonePage } from "@/data/zones";

const page = getZonePage("buenos-aires");

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
  alternates: {
    canonical: page.path,
  },
  openGraph: {
    title: `${page.seoTitle} | Novaire Studio`,
    description: page.seoDescription,
    url: `https://www.studionovaire.com${page.path}`,
    siteName: "Novaire Studio",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ZonePageView page={page} />;
}
