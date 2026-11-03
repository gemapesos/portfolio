import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { CornerDownRightIcon } from "./icons";
import { TextLink } from "./text-link";

export function Entry({
  title,
  href,
  subtitle,
  meta,
  logo,
  image,
  children,
}: {
  title: string;
  href?: string;
  subtitle?: string;
  meta?: string;
  logo?: StaticImageData;
  image?: StaticImageData;
  children?: ReactNode;
}) {
  return (
    <li>
      {image ? (
        // The whole image, sized by height so a row of them lines up. Hidden
        // from assistive tech and the tab order because the title link below
        // goes to the same place.
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="mb-5 block cursor-zoom-in"
        >
          <Image
            src={image}
            alt=""
            sizes="(min-width: 1024px) 380px, 360px"
            placeholder="blur"
            className="h-60 w-auto max-w-none outline -outline-offset-1 outline-black/10 lg:h-64"
          />
        </a>
      ) : null}
      <div className="flex gap-2">
        {logo ? (
          // Decorative: the title beside it already names the organization.
          <Image
            src={logo}
            alt=""
            sizes="16px"
            className="h-[1lh] w-4 shrink-0 object-contain"
          />
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3>
              {href ? (
                <TextLink href={href} newTab className="hover:text-muted">
                  {title}
                </TextLink>
              ) : (
                title
              )}
            </h3>
            {meta ? <span className="shrink-0 text-muted">{meta}</span> : null}
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
        </div>
      </div>
    </li>
  );
}
