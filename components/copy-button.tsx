"use client";

import { useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const reset = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard access can be blocked; the value is still selectable on the page.
      return;
    }
    setCopied(true);
    clearTimeout(reset.current);
    reset.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        className="inline-grid size-5 cursor-pointer place-items-center rounded-xs text-muted transition-colors hover:text-foreground"
      >
        {copied ? (
          <CheckIcon className="size-3" />
        ) : (
          <CopyIcon className="size-3" />
        )}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </>
  );
}
