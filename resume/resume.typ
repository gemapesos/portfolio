// Gean Mapesos: one-page resume template.
// All copy comes from lib/data.ts; build from the repo root with:
// npm run build:resume

#let data = json("data.json")

#set document(title: data.site.name + " - Resume", author: data.site.name)
#set page(paper: "a4", margin: (x: 1.9cm, y: 1.3cm))
#set text(font: "Inter", size: 10pt, fill: black, lang: "en")
#set par(leading: 0.55em, justify: false)
#set list(indent: 0.6em, body-indent: 0.6em, spacing: 0.5em)
#show link: it => it

#let section(title) = {
  v(0.8em)
  text(weight: "medium", size: 10.5pt, upper(title))
  v(-0.55em)
  line(length: 100%, stroke: 0.5pt + black)
  v(0.2em)
}

#let entry(left, right, sub: none) = {
  text(weight: "medium", left)
  h(1fr)
  right
  if sub != none and sub != "" {
    linebreak()
    sub
  }
  v(0.1em)
}

#align(center)[
  #text(size: 20pt, weight: "medium", data.site.name)
  #v(-0.2em)
  #data.site.location | #link("mailto:" + data.site.email, data.site.email) | #link(data.site.url, data.site.urlLabel) \
  #link(data.site.github, data.site.githubLabel) | #link(data.site.linkedin, data.site.linkedinLabel)
]

#v(0.6em)
#data.summary

#section("Education")
#for (i, item) in data.education.enumerate() {
  if i > 0 { v(0.3em) }
  entry(item.school, item.period, sub: item.degree)
}

#section("Experience")
#for (i, job) in data.experience.enumerate() {
  if i > 0 { v(0.3em) }
  entry(job.company, job.period, sub: job.subtitle)
  if job.highlights.len() > 0 { list(..job.highlights) }
}

#section("Projects")
#for (i, project) in data.projects.enumerate() {
  if i > 0 { v(0.3em) }
  let header = {
    project.title
    if project.links.len() > 0 {
      text(weight: "regular", {
        " | "
        project.links.map(lnk => link(lnk.url, lnk.label)).join(" · ")
      })
    }
  }
  entry(header, project.meta)
  list(project.description)
}

#section("Certifications")
#for (i, cert) in data.certifications.enumerate() {
  if i > 0 { v(0.3em) }
  entry(cert.name, cert.issued, sub: cert.subtitle)
}

#section("Skills")
#data.skills.map(group => {
  text(weight: "medium", group.label + ": ")
  group.items.join(", ")
}).join(linebreak())
