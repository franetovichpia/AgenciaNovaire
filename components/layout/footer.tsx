import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { niches } from "@/data/niches";
import { navigation, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="card-section card-ink py-14 text-white">
      <Container>
        <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Link
              href="/"
              className="font-display text-4xl text-white sm:text-5xl"
            >
              Novaire <span className="italic">studio</span>
            </Link>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/50">
              Diseño y desarrollo de soluciones digitales para empresas,
              profesionales y emprendimientos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Navegación
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Webs para
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {niches.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.path}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Contacto
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
                >
                  WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
                >
                  Email
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={siteConfig.instagram}
                  className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
                >
                  Instagram
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Novaire. Todos los derechos reservados.
          </p>

          <p>Diseñado y desarrollado por Novaire.</p>
        </div>
      </Container>
    </footer>
  );
}
