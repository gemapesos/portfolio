import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { grid } from "@/components/section";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <main id="main" className={`${grid} min-h-dvh items-center py-20`}>
      <div className="lg:col-start-2">
        <p className="text-xs font-medium tracking-[0.06em] text-muted uppercase">
          404
        </p>
        <h1 className="mt-2 text-base font-medium tracking-[-0.01em]">
          Page not found
        </h1>
        <p className="mt-2 leading-relaxed text-muted">
          The page you requested does not exist.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Back home
            <ArrowRightIcon className="size-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
