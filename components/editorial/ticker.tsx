const items = [
  "Diseño web",
  "Tiendas online",
  "Sistemas de gestión",
  "Aplicaciones móviles",
  "Automatizaciones",
  "Agenda online",
];

export function Ticker() {
  const row = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden card-section bg-background py-3 text-foreground"
    >
      <div className="ticker-track flex w-max whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((item, index) => (
              <span
                key={`${copy}-${index}`}
                className="font-impact flex items-center text-sm sm:text-base"
              >
                {item}
                <span className="mx-6 inline-block h-1.5 w-1.5 rounded-full bg-[#0a0a0a]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
