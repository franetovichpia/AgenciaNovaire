import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";

type Step = { title: string; text: string };

export function ProcessBand({ steps }: { steps: Step[] }) {
  return (
    <section className="card-section card-ink text-[#f3efe8]">
      <Container>
        <div className="flex items-stretch gap-6 sm:gap-10">
          <div className="flex-1 divide-y divide-white/15 py-14 sm:py-24">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.15}
                className="grid gap-x-6 gap-y-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[3.5rem_1fr]"
              >
                <span className="pt-1 text-sm text-accent">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
                <div>
                  <h3 className="font-impact text-xl sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="right" className="shrink-0 self-center">
            <span
              aria-hidden="true"
              className="font-impact vertical-word block text-[3.25rem] leading-none text-accent sm:text-[5rem]"
            >
              Proceso
            </span>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
