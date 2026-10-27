import Image from "next/image";

/** Foto desenfocada y muy tenue detrás de las portadas negras. */
export function HeroBackdrop() {
  return (
    <>
      <Image
        src="/brand/portada.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-110 object-cover opacity-30 blur-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/60 to-[#0a0a0a]" />
    </>
  );
}
