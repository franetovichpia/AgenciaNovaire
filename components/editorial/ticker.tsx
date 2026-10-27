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
      className="overflow-hidden border-y border-black/20 bg-accent py-3 text-[#16231b]"
    >
      <div className="ticker-track flex w-max whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((item, index) => (
              <span
                key={`${copy}-${index}`}
                className="font-impact flex items-center text-lg sm:text-xl"
              >
                {item}
                <span className="mx-6 inline-block h-1.5 w-1.5 rounded-full bg-[#16231b]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
