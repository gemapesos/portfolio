"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Certification } from "@/app/data";
import { CopyButton } from "./copy-button";
import { CornerDownRightIcon, XIcon } from "./icons";
import { TextLink } from "./text-link";

export function CertificateCard({ cert }: { cert: Certification }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const verifyHost = cert.verifyUrl
    ? new URL(cert.verifyUrl).hostname
    : undefined;

  function open() {
    dialogRef.current?.showModal();
  }

  return (
    <li>
      {cert.image ? (
        <button
          type="button"
          onClick={open}
          aria-label={`Preview ${cert.name} certificate`}
          className="mb-4 block cursor-zoom-in rounded-xs text-left"
        >
          <Image
            src={cert.image}
            alt={`${cert.name} certificate`}
            sizes="(min-width: 1024px) 320px, 280px"
            placeholder="blur"
            className="h-44 w-auto max-w-none rounded-xs outline -outline-offset-1 outline-black/10 transition-[filter] duration-200 lg:h-48 dark:outline-white/15 dark:brightness-90 dark:hover:brightness-100"
          />
        </button>
      ) : null}

      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-medium">
            {cert.image ? (
              <button
                type="button"
                onClick={open}
                className="cursor-pointer rounded-xs text-left underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {cert.name}
              </button>
            ) : cert.verifyUrl ? (
              <TextLink
                href={cert.verifyUrl}
                newTab
                className="underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {cert.name}
              </TextLink>
            ) : (
              cert.name
            )}
          </h3>
          <span className="shrink-0 text-muted tabular-nums">
            {cert.issued}
          </span>
        </div>
        <p className="flex gap-1.5 text-muted">
          <CornerDownRightIcon className="h-[1lh] w-2.5 shrink-0" />
          {cert.issuer}
        </p>
        {cert.note ? (
          <p className="mt-1 pl-4 text-muted">{cert.note}</p>
        ) : null}
      </div>

      {cert.image ? (
        <dialog
          ref={dialogRef}
          aria-label={`${cert.name} certificate`}
          onClick={(e) => {
            if (e.target === dialogRef.current) {
              dialogRef.current.close();
            }
          }}
          className="m-auto max-h-[90dvh] w-[min(92vw,56rem)] overflow-visible bg-transparent p-0 text-foreground backdrop:bg-black/75 backdrop:backdrop-blur-xs"
        >
          <div className="overflow-hidden rounded-md border border-border bg-background shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-2.5">
              <span className="truncate font-medium">{cert.name}</span>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close preview"
                className="relative inline-grid size-7 shrink-0 cursor-pointer place-items-center rounded-xs text-muted transition-colors after:absolute after:-inset-2 after:content-[''] hover:text-foreground"
              >
                <XIcon className="size-4" />
              </button>
            </div>
            <div className="bg-background p-3 sm:p-4">
              <Image
                src={cert.image}
                alt={`${cert.name} certificate`}
                sizes="(min-width: 1024px) 860px, 92vw"
                className="mx-auto max-h-[70dvh] w-auto rounded-xs object-contain outline -outline-offset-1 outline-black/10 dark:outline-white/15"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-border px-4 py-2.5 text-xs text-muted">
              <span className="tabular-nums">
                {cert.issuer} · Issued {cert.issued}
                {cert.expires ? ` · Expires ${cert.expires}` : ""}
              </span>
              {cert.credentialId || (cert.verifyUrl && verifyHost) ? (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  {cert.credentialId ? (
                    <span className="inline-flex items-center gap-1">
                      <span>ID:</span>
                      <span className="font-medium text-foreground tabular-nums">
                        {cert.credentialId}
                      </span>
                      <CopyButton
                        value={cert.credentialId}
                        label="Copy credential ID"
                      />
                    </span>
                  ) : null}
                  {cert.verifyUrl && verifyHost ? (
                    <TextLink
                      href={cert.verifyUrl}
                      className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                    >
                      {`Verify at ${verifyHost}`}
                    </TextLink>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </dialog>
      ) : null}
    </li>
  );
}
