import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { about, site } from "./data";

export const alt = `${site.name}: ${about.roles.join(", ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [regular, medium] = await Promise.all([
  readFile(join(process.cwd(), "assets/Inter-Regular.ttf")),
  readFile(join(process.cwd(), "assets/Inter-Medium.ttf")),
]);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", fontSize: 36 }}>&gt;_</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 500,
              // Inter needs tighter tracking at display sizes.
              letterSpacing: "-0.02em",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 24,
              fontSize: 30,
              lineHeight: 1.5,
              color: "#9f9fa9",
            }}
          >
            {about.roles.map((role) => (
              <div key={role}>{role}</div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
