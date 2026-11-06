import { CopyButton } from "@/components/copy-button";
import { Entry } from "@/components/entry";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";
import { Section, enter, grid, row } from "@/components/section";
import { TextLink } from "@/components/text-link";
import {
  about,
  certifications,
  education,
  experience,
  links,
  projects,
  site,
} from "./data";

const linkIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: `mailto:${site.email}`,
  jobTitle: experience[0].role,
  worksFor: { "@type": "Organization", name: experience[0].company },
  affiliation: { "@type": "CollegeOrUniversity", name: education[0].school },
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <header className={`${grid} pt-16 lg:pt-24`}>
        <div className="animate-enter motion-reduce:animate-none lg:col-start-2">
          <h1 className="font-medium">{site.name}</h1>
          {about.roles.map((role) => (
            <p key={role} className="text-muted">
              {role}
            </p>
          ))}
        </div>
      </header>

      <main>
        <div className={`${grid} pt-24 pb-16 lg:pt-36 lg:pb-20`}>
          <div
            className="animate-enter motion-reduce:animate-none lg:col-start-2"
            style={enter(1)}
          >
            <p className="text-muted">
              <span className="text-foreground">
                <span aria-hidden="true">&gt;_ </span>
                {about.tagline.lead}
              </span>{" "}
              {about.tagline.rest}
            </p>
            {about.bio.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-muted">
                {paragraph}
              </p>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="group mt-10 inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
            >
              Get in touch
              <ArrowRightIcon className="size-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <Section id="projects" title="Projects" step={2}>
          <ul className="space-y-6">
            {projects.map((project) => (
              <Entry key={project.title} title={project.title}>
                {project.description}
              </Entry>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience" step={3}>
          <ul className="space-y-6">
            {experience.map((job) => (
              <Entry
                key={job.company}
                title={job.company}
                subtitle={job.role}
                meta={job.period}
                logo={job.logo}
              >
                {job.summary}
              </Entry>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education" step={4}>
          <ul className="space-y-6">
            {education.map((item) => (
              <Entry
                key={item.school}
                title={item.school}
                subtitle={item.degree}
                meta={item.period}
                logo={item.logo}
              />
            ))}
          </ul>
        </Section>

        <Section id="certifications" title="Certifications" step={5}>
          <ul className={row}>
            {certifications.map((cert) => (
              <Entry
                key={cert.name}
                title={cert.name}
                href={cert.image?.src}
                subtitle={cert.issuer}
                meta={cert.issued}
                image={cert.image}
                details={
                  cert.credentialId || cert.expires || cert.verifyUrl ? (
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4">
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
                          <dd className="text-foreground">{cert.expires}</dd>
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
          </ul>
        </Section>

        <Section id="connect" title="Connect" step={6}>
          <dl className="space-y-4">
            {links.map((link) => {
              const Icon = linkIcons[link.icon];
              return (
                <div key={link.label}>
                  <dt className="flex items-center gap-1.5 text-muted">
                    <Icon className="size-3.5" />
                    {link.label}
                  </dt>
                  <dd>
                    <TextLink href={link.href} className="hover:text-muted">
                      {link.handle}
                    </TextLink>
                  </dd>
                </div>
              );
            })}
          </dl>
        </Section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </main>
    </>
  );
}
