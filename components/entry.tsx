import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { CornerDownRightIcon } from "./icons";
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
  tags,
  links,
  children,
}: {
  title: string;
  href?: string;
  subtitle?: string;
  meta?: string;
  logo?: StaticImageData;
  tags?: string[];
  links?: EntryLink[];
  children?: ReactNode;
}) {
  return (
    <li>
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
                <TextLink
                  href={href}
                  newTab
                  className="underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
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
          {subtitle ? (
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
