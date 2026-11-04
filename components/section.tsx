import type { CSSProperties, ReactNode } from "react";

// Three columns on large screens (label, content, aside); a single 30rem column below that.
export const grid =
  "mx-auto grid w-full max-w-[32.5rem] gap-y-5 px-5 lg:max-w-6xl lg:grid-cols-[minmax(0,1fr)_30rem_minmax(0,1fr)] lg:gap-x-10 lg:px-12 xl:px-20";

// A sideways row, after alexcarpenter.me's projects: it starts at the content
// column, runs to the edge of the screen and scrolls when it doesn't fit.
// --bleed is the gap between the content column and the screen edge, measured
// in cqw (the section's width) so a visible scrollbar isn't counted. The row's
// own scrollbar is hidden; edge-fade shows which way there's more to see.
export const row =
  "-mx-(--bleed) flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-(--bleed) pb-1 scroll-px-(--bleed) [--bleed:calc((100cqw_-_min(100cqw_-_2.5rem,30rem))_/_2)] edge-fade [scrollbar-width:none] [&::-webkit-scrollbar]:hidden *:w-min *:shrink-0 *:snap-start lg:-ml-1 lg:gap-8 lg:pr-12 lg:pl-1 xl:pr-20 lg:scroll-pl-1";

// Staggers the entrance animation so the page assembles top to bottom.
export function enter(step: number): CSSProperties {
  return { animationDelay: `${step * 80}ms` };
}

export function Section({
  id,
  title,
  step,
  aside,
  children,
}: {
  id: string;
  title: string;
  step: number;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="@container overflow-x-clip border-t border-border"
    >
      <div
        className={`${grid} animate-enter py-16 motion-reduce:animate-none lg:py-20`}
        style={enter(step)}
      >
        <h2 id={id}>{title}</h2>
        <div className="min-w-0">{children}</div>
        {aside ? <div className="lg:text-right">{aside}</div> : null}
      </div>
    </section>
  );
}
