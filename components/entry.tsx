import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { ChevronDownIcon, CornerDownRightIcon } from "./icons";
import { TextLink } from "./text-link";

type EntryLink = {
  label: string;
  href: string;
};

export function Entry({
  title,
  href,
  subtitle,
  meta,
  logo,
  preview,
  tags,
  links,
  details,
  children,
}: {
  title: string;
  href?: string;
  subtitle?: string;
  meta?: string;
  logo?: StaticImageData;
  preview?: ReactNode;
  tags?: string[];
  links?: EntryLink[];
  // Extra detail revealed by clicking the subtitle row. Needs a subtitle.
  details?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <li>
      {preview}
      <div className="flex gap-3">
        {logo ? (
          // Decorative: the title beside it already names the organization.
          // Seated on a subtle light surface so colorful marks stay legible in dark mode.
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1 ring-1 ring-border">
            <Image
              src={logo}
              alt=""
              sizes="20px"
              className="h-full w-full max-h-full max-w-full object-contain"
            />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-medium">
              {href ? (
                <TextLink href={href} newTab className="hover:text-muted">
                  {title}
                </TextLink>
              ) : (
                title
              )}
            </h3>
            {meta ? (
              <span className="shrink-0 text-muted tabular-nums">{meta}</span>
            ) : null}
          </div>
          {subtitle && details ? (
            // The subtitle row is the toggle, so the chevron sits on a line of
            // text instead of floating on its own. Closed by default, and
            // native <details> brings keyboard and screen-reader support.
            <details className="group">
              <summary
                title="Credential details"
                className="flex cursor-pointer list-none gap-1.5 rounded-xs text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground [&::-webkit-details-marker]:hidden"
              >
                <CornerDownRightIcon className="h-[1lh] w-2.5 shrink-0" />
                <span className="min-w-0 flex-1">
                  {subtitle}
                  <span className="sr-only">, show credential details</span>
                </span>
                <ChevronDownIcon className="h-[1lh] w-3.5 shrink-0 transition-transform duration-200 ease-out group-open:rotate-180" />
              </summary>
              <div className="mt-2 pl-4 text-muted">{details}</div>
            </details>
          ) : subtitle ? (
            <p className="flex gap-1.5 text-muted">
              <CornerDownRightIcon className="h-[1lh] w-2.5 shrink-0" />
              {subtitle}
            </p>
          ) : null}
          {children ? (
            // Indent details under the subtitle text, past the corner arrow.
            <div
              className={subtitle ? "mt-2 pl-4 text-muted" : "mt-1 text-muted"}
            >
              {children}
            </div>
          ) : null}
          {tags?.length || links?.length ? (
            <div
              className={`mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2 ${subtitle ? "pl-4" : ""}`}
            >
              {tags?.length ? (
                <ul
                  aria-label="Technologies"
                  className="flex flex-wrap gap-1.5"
                >
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-xs border border-border px-1.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
              {links?.map((link) => (
                <TextLink
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted hover:text-foreground"
                >
                  {link.label}
                </TextLink>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}
