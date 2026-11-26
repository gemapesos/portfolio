"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { row } from "./section";

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
