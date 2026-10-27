import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";

type Step = { title: string; text: string };

export function ProcessBand({ steps }: { steps: Step[] }) {
  return (
    <section className="bg-[#0f1511] text-[#f3efe8]">
      <Container>
        <div className="flex items-stretch gap-6 sm:gap-10">
          <div className="flex-1 divide-y divide-white/15 py-8 sm:py-12">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.15}
                className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[4rem_14rem_1fr] sm:gap-6"
              >
                <span className="text-sm text-accent">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
                <h3 className="font-impact text-2xl sm:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-xl text-sm leading-7 text-white/65">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal direction="right" className="shrink-0 self-center">
            <span
              aria-hidden="true"
              className="font-impact vertical-word block text-[4.5rem] leading-none text-accent sm:text-[8rem]"
            >
              Proceso
            </span>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
