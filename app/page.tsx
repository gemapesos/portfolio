import { CertificateCard } from "@/components/certificate-preview";
import { CopyButton } from "@/components/copy-button";
import { Entry } from "@/components/entry";
import { ArrowRightIcon, FileTextIcon, MailIcon } from "@/components/icons";
import { ScrollRow } from "@/components/scroll-row";
import { Section, enter, grid } from "@/components/section";
import { TextLink } from "@/components/text-link";
import {
  about,
  certifications,
  connect,
  education,
  experience,
  projects,
  site,
  skills,
} from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: experience[0]?.role,
  worksFor: experience[0]
    ? { "@type": "Organization", name: experience[0].company }
    : undefined,
  affiliation: education[0]
    ? { "@type": "CollegeOrUniversity", name: education[0].school }
    : undefined,
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <header className={`${grid} pt-14 lg:pt-20`}>
        <div className="animate-enter motion-reduce:animate-none lg:col-start-2">
          <h1 className="text-base font-medium tracking-[-0.01em]">
            {site.name}
          </h1>
          {about.roles.map((role) => (
            <p key={role} className="text-muted">
              {role}
            </p>
          ))}
        </div>
      </header>

      <main id="main">
        <div className={`${grid} pt-14 pb-12 lg:pt-20 lg:pb-16`}>
          <div
            className="animate-enter motion-reduce:animate-none lg:col-start-2"
            style={enter(1)}
          >
            <div className="leading-relaxed">
              <p className="text-muted">
                <span className="font-medium text-foreground">
                  <span aria-hidden="true">&gt;_ </span>
                  {about.tagline.lead}
                </span>{" "}
                {about.tagline.rest}
              </p>
              <p className="mt-4 text-muted">
                {about.closing.before}
                <mark className="bg-foreground px-1 py-px text-background selection:bg-background selection:text-foreground">
                  {about.closing.highlight}
                </mark>
                {about.closing.after}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="inline-flex items-center gap-1">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-1.5 font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  Get in touch
                  <ArrowRightIcon className="size-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </a>
                <CopyButton value={site.email} label="Copy email address" />
              </span>
              <TextLink
                href={site.resume}
                newTab
                className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Resume
              </TextLink>
              <TextLink
                href={site.github}
                className="text-muted hover:text-foreground"
              >
                GitHub
              </TextLink>
              <TextLink
                href={site.linkedin}
                className="text-muted hover:text-foreground"
              >
                LinkedIn
              </TextLink>
            </div>
          </div>
        </div>

        <Section id="projects" title="Projects" step={2}>
          <ul className="space-y-6">
            {projects.map((project) => (
              <Entry
                key={project.title}
                title={project.title}
                href={project.href}
                meta={project.meta}
                tags={project.tags}
                links={
                  project.repo
                    ? [{ label: "Source", href: project.repo }]
                    : undefined
                }
              >
                {project.description}
              </Entry>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience" step={3}>
          <ul className="space-y-6">
            {experience.map((job) => (
              <Entry
                key={`${job.company}-${job.role}-${job.period}`}
                title={job.company}
                subtitle={
                  job.arrangement
                    ? `${job.role} · ${job.arrangement}`
                    : job.role
                }
                meta={job.period}
                logo={job.logo}
              >
                {job.highlights?.length ? (
                  <ul className="list-disc space-y-1.5 pl-4 marker:text-muted/60">
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </Entry>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills" step={4}>
          <dl className="grid grid-cols-1 gap-y-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-x-4">
            {skills.map((group) => (
              <div key={group.label} className="contents">
                <dt className="text-muted">{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education" step={5}>
          <ul className="space-y-6">
            {education.map((item) => (
              <Entry
                key={`${item.school}-${item.degree}`}
                title={item.school}
                subtitle={item.degree}
                meta={item.period}
                logo={item.logo}
              />
            ))}
          </ul>
        </Section>

        <Section id="certifications" title="Certifications" step={6}>
          <ScrollRow label="Certifications">
            {certifications.map((cert) => (
              <CertificateCard key={cert.name} cert={cert} />
            ))}
          </ScrollRow>
        </Section>

        <Section id="connect" title="Connect" step={7}>
          <p className="leading-relaxed text-muted">{connect.note}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-1.5">
              <MailIcon
                className="size-4 shrink-0 text-muted"
                aria-hidden="true"
              />
              <a
                href={`mailto:${site.email}`}
                className="font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {site.email}
              </a>
              <CopyButton value={site.email} label="Copy email address" />
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FileTextIcon
                className="size-4 shrink-0 text-muted"
                aria-hidden="true"
              />
              <TextLink
                href={site.resume}
                newTab
                className="font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Download Resume
              </TextLink>
            </span>
          </div>
        </Section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </main>

      <footer className="border-t border-border">
        <div
          className={`${grid} animate-enter py-10 text-xs text-muted motion-reduce:animate-none`}
          style={enter(8)}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 lg:col-start-2">
            <span>{site.location}</span>
            <div className="flex flex-wrap items-center gap-4">
              <TextLink href={site.github} className="hover:text-foreground">
                GitHub
              </TextLink>
              <TextLink href={site.linkedin} className="hover:text-foreground">
                LinkedIn
              </TextLink>
              <TextLink href={site.repo} className="hover:text-foreground">
                Source
              </TextLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
