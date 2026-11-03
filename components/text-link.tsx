import { ArrowUpRightIcon } from "./icons";

export function TextLink({
  href,
  newTab = href.startsWith("http"),
  className = "",
  children,
}: {
  href: string;
  newTab?: boolean;
  className?: string;
  children: string;
}) {
  // When a long link wraps, the arrow moves down with the last word instead of
  // ending up on a line by itself.
  const lastWord = children.lastIndexOf(" ") + 1;

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className={`group transition-colors ${className}`}
    >
      {children.slice(0, lastWord)}
      <span className="whitespace-nowrap">
        {children.slice(lastWord)}
        <ArrowUpRightIcon className="ml-1 inline-block size-3 align-middle transition-transform duration-200 ease-out group-hover:translate-x-px group-hover:-translate-y-px" />
      </span>
      {newTab ? <span className="sr-only">(opens in a new tab)</span> : null}
    </a>
  );
}
