import { CertificatePreview } from "@/components/certificate-preview";
import { CopyButton } from "@/components/copy-button";
import { Entry } from "@/components/entry";
import {
  ArrowRightIcon,
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";
import { ScrollRow } from "@/components/scroll-row";
import { Section, enter, grid } from "@/components/section";
import { TextLink } from "@/components/text-link";
import {
  about,
  certifications,
  education,
  experience,
  links,
  projects,
  site,
  skills,
} from "./data";

const linkIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
  resume: FileTextIcon,
};

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

      <main>
        <div className={`${grid} pt-14 pb-12 lg:pt-20 lg:pb-16`}>
          <div
            className="animate-enter motion-reduce:animate-none lg:col-start-2"
            style={enter(1)}
          >
            <p className="text-muted">
              <span className="font-medium text-foreground">
                <span aria-hidden="true">&gt;_ </span>
                {about.tagline.lead}
              </span>{" "}
              {about.tagline.rest}
            </p>
            {about.bio.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-muted">
                {paragraph}
              </p>
            ))}
            <p className="mt-4 text-muted">
              {about.closing.before}
              <mark className="bg-foreground px-1 py-px text-background selection:bg-background selection:text-foreground">
                {about.closing.highlight}
              </mark>
              {about.closing.after}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              <TextLink
                href={site.resume}
                newTab
                className="font-medium hover:text-muted"
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
              <span className="inline-flex items-center gap-1">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                >
                  Get in touch
                  <ArrowRightIcon className="size-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </a>
                <CopyButton value={site.email} label="Copy email address" />
              </span>
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
              <Entry
                key={cert.name}
                title={cert.name}
                href={cert.verifyUrl}
                subtitle={cert.issuer}
                meta={cert.issued}
                preview={
                  cert.image ? (
                    <CertificatePreview
                      image={cert.image}
                      title={cert.name}
                      verifyUrl={cert.verifyUrl}
                    />
                  ) : undefined
                }
                details={
                  cert.credentialId || cert.expires || cert.verifyUrl ? (
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5">
                      {cert.credentialId ? (
                        <>
                          <dt>Credential ID</dt>
                          <dd className="flex items-center gap-1 text-foreground">
                            {cert.credentialId}
                            <CopyButton
                              value={cert.credentialId}
                              label="Copy credential ID"
                            />
                          </dd>
                        </>
                      ) : null}
                      {cert.expires ? (
                        <>
                          <dt>Expires</dt>
                          <dd className="text-foreground tabular-nums">
                            {cert.expires}
                          </dd>
                        </>
                      ) : null}
                      {cert.verifyUrl ? (
                        <>
                          <dt>Verify at</dt>
                          <dd>
                            <TextLink
                              href={cert.verifyUrl}
                              className="text-foreground hover:text-muted"
                            >
                              {new URL(cert.verifyUrl).hostname}
                            </TextLink>
                          </dd>
                        </>
                      ) : null}
                    </dl>
                  ) : undefined
                }
              >
                {cert.note}
              </Entry>
            ))}
          </ScrollRow>
        </Section>

        <Section id="connect" title="Connect" step={7}>
          <ul className="space-y-3">
            {links.map((link) => {
              const Icon = linkIcons[link.icon];
              return (
                <li key={link.label} className="flex items-center gap-2">
                  <Icon
                    className="size-4 shrink-0 text-muted"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{link.label}: </span>
                  <TextLink href={link.href} className="hover:text-muted">
                    {link.handle}
                  </TextLink>
                  {link.copyValue ? (
                    <CopyButton
                      value={link.copyValue}
                      label={`Copy ${link.label.toLowerCase()}`}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
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
            <TextLink href={site.repo} className="hover:text-foreground">
              Source
            </TextLink>
          </div>
        </div>
      </footer>
    </>
  );
}
