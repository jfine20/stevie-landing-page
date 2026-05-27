import { marqueeDestinations } from "@/lib/content";

export function Marquee() {
  const track = [...marqueeDestinations, ...marqueeDestinations];
  return (
    <div
      className="overflow-hidden border-y border-[var(--rule)] py-[22px]"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {track.map((dest, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[14px] font-display text-[22px] tracking-[-0.01em] text-cobalt-ink"
          >
            <span className="size-[5px] rounded-full bg-cobalt" />
            {dest}
          </span>
        ))}
      </div>
    </div>
  );
}
