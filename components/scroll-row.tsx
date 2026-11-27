"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

// A sideways row, after alexcarpenter.me's projects: it starts at the content
// column, runs to the edge of the screen and scrolls when it doesn't fit.
// --bleed is the gap between the content column and the screen edge, measured
// in cqw (the enclosing Section's @container width) so a visible scrollbar isn't
// counted. The row's own scrollbar is hidden; ScrollRow adds desktop prev/next
// buttons when the row overflows. It only snaps on phones: on wider screens the
// row overflows by less than a card, so snapping would turn any scroll into a jump
// to the far end.
const row =
  "-mx-(--bleed) flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-(--bleed) pb-1 scroll-px-(--bleed) [--bleed:calc((100cqw_-_min(100cqw_-_2.5rem,30rem))_/_2)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden *:w-min *:shrink-0 *:snap-start sm:snap-none lg:-ml-1 lg:gap-6 lg:pr-12 lg:pl-1 xl:pr-20 lg:scroll-pl-1";

export function ScrollRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", sync);
      observer.disconnect();
    };
  }, [sync]);

  function nudge(direction: -1 | 1) {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 340, behavior: "smooth" });
  }

  const hasOverflow = canPrev || canNext;

  return (
    <div>
      <ul ref={listRef} className={row}>
        {children}
      </ul>
      {hasOverflow ? (
        <div
          aria-label={`${label} scroll controls`}
          className="mt-4 hidden items-center gap-2.5 sm:flex"
        >
          <button
            type="button"
            onClick={() => nudge(-1)}
            disabled={!canPrev}
            aria-label={`Scroll ${label.toLowerCase()} left`}
            className="relative inline-grid size-7 cursor-pointer place-items-center rounded-xs border border-border text-muted transition-colors after:absolute after:-inset-1.5 after:content-[''] hover:text-foreground disabled:cursor-default disabled:opacity-35 disabled:hover:text-muted"
          >
            <ChevronLeftIcon className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            disabled={!canNext}
            aria-label={`Scroll ${label.toLowerCase()} right`}
            className="relative inline-grid size-7 cursor-pointer place-items-center rounded-xs border border-border text-muted transition-colors after:absolute after:-inset-1.5 after:content-[''] hover:text-foreground disabled:cursor-default disabled:opacity-35 disabled:hover:text-muted"
          >
            <ChevronRightIcon className="size-3.5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
