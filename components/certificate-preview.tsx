"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { XIcon } from "./icons";
import { TextLink } from "./text-link";

export function CertificatePreview({
  image,
  title,
  verifyUrl,
}: {
  image: StaticImageData;
  title: string;
  verifyUrl?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Preview ${title} certificate`}
        className="mb-4 block cursor-zoom-in rounded-xs text-left"
      >
        <Image
          src={image}
          alt={`${title} certificate`}
          sizes="(min-width: 1024px) 320px, 280px"
          placeholder="blur"
          className="h-44 w-auto max-w-none rounded-xs outline -outline-offset-1 outline-black/10 transition-[filter] duration-200 lg:h-48 dark:outline-white/15 dark:brightness-90 dark:hover:brightness-100"
        />
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${title} certificate`}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
        className="m-auto max-h-[90dvh] w-[min(92vw,56rem)] overflow-visible bg-transparent p-0 text-foreground backdrop:bg-black/75 backdrop:backdrop-blur-xs"
      >
        <div className="overflow-hidden rounded-md border border-border bg-background shadow-2xl">
          <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-2.5">
            <span className="truncate font-medium">{title}</span>
            <div className="flex shrink-0 items-center gap-3">
              {verifyUrl ? (
                <TextLink
                  href={verifyUrl}
                  className="text-xs text-muted hover:text-foreground"
                >
                  Verify
                </TextLink>
              ) : null}
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close preview"
                className="inline-grid size-7 cursor-pointer place-items-center rounded-xs text-muted transition-colors hover:text-foreground"
              >
                <XIcon className="size-4" />
              </button>
            </div>
          </div>
          <div className="bg-background p-3 sm:p-4">
            <Image
              src={image}
              alt={`${title} certificate`}
              sizes="(min-width: 1024px) 860px, 92vw"
              className="mx-auto max-h-[75dvh] w-auto rounded-xs object-contain outline -outline-offset-1 outline-black/10 dark:outline-white/15"
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
