import { writeFileSync } from "node:fs";
import { registerHooks } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const rootUrl = pathToFileURL(`${rootDir}/`).href;

// Allow importing lib/data.ts directly in Node without Next.js's bundler:
// resolve @/* path aliases to the repo root and stub static image imports.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (/\.(webp|png|jpe?g|svg)$/.test(specifier)) {
      return {
        url: "data:text/javascript,export default {}",
        shortCircuit: true,
      };
    }
    if (specifier.startsWith("@/")) {
      return nextResolve(new URL(specifier.slice(2), rootUrl).href, context);
    }
    return nextResolve(specifier, context);
  },
  load(url, context, nextLoad) {
    if (url.endsWith(".ts")) {
      return {
        ...nextLoad(url, { ...context, format: "module-typescript" }),
        format: "module-typescript",
      };
    }
    return nextLoad(url, context);
  },
});

const { about, certifications, education, experience, projects, site, skills } =
  await import(new URL("lib/data.ts", rootUrl).href);

function displayUrl(rawUrl) {
  return rawUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

const resumeData = {
  site: {
    name: site.name,
    location: site.location.replace(/\s*\([^)]*\)$/, ""),
    email: site.email,
    url: site.url,
    urlLabel: displayUrl(site.url),
    github: site.github,
    githubLabel: displayUrl(site.github),
    linkedin: site.linkedin,
    linkedinLabel: displayUrl(site.linkedin),
  },
  summary: `${about.tagline.lead} ${about.tagline.rest} ${about.closing.before}${about.closing.highlight}${about.closing.after}`,
  education: education.map(({ school, degree, period }) => ({
    school,
    degree,
    period,
  })),
  experience: experience.map(
    ({ company, role, period, arrangement, highlights }) => ({
      company,
      period,
      subtitle: arrangement
        ? `${role} | ${arrangement.replace(" · ", ", ")}`
        : role,
      highlights: highlights ?? [],
    }),
  ),
  projects: projects.map(({ title, meta, href, repo, description }) => ({
    title,
    meta: meta ?? "",
    links: [
      ...(href ? [{ url: href, label: displayUrl(href) }] : []),
      ...(repo ? [{ url: repo, label: displayUrl(repo) }] : []),
    ],
    description,
  })),
  certifications: certifications.map(
    ({ name, issuer, issued, credentialId, note }) => {
      const parts = [issuer];
      if (note) parts.push(note);
      if (credentialId) parts.push(`Credential ID: ${credentialId}`);
      return {
        name,
        issued,
        subtitle: parts.join(" | "),
      };
    },
  ),
  skills,
};

writeFileSync(
  resolve(rootDir, "resume/data.json"),
  `${JSON.stringify(resumeData, null, 2)}\n`,
);
