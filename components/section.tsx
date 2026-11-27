import type { CSSProperties, ReactNode } from "react";

// Three columns on large screens (label, content, aside); a single 30rem column below that.
export const grid =
  "mx-auto grid w-full max-w-[32.5rem] gap-y-5 px-5 lg:max-w-6xl lg:grid-cols-[minmax(0,1fr)_30rem_minmax(0,1fr)] lg:gap-x-10 lg:px-12 xl:px-20";

// Staggers the entrance animation so the page assembles top to bottom.
export function enter(step: number): CSSProperties {
  return { animationDelay: `${step * 45}ms` };
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
        className={`${grid} animate-enter py-12 motion-reduce:animate-none lg:py-16`}
        style={enter(step)}
      >
        <h2
          id={id}
          className="text-xs font-medium uppercase tracking-[0.06em] text-muted lg:text-sm lg:font-normal lg:tracking-normal lg:normal-case"
        >
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
        {aside ? <div className="lg:text-right">{aside}</div> : null}
      </div>
    </section>
  );
}
