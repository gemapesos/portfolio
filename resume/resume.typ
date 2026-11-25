// Gean Mapesos: one-page resume. Build from the repo root with:
// typst compile --font-path assets resume/resume.typ resume/Gean-Mapesos-Resume.pdf

#set document(title: "Gean Mapesos - Resume", author: "Gean Mapesos")
#set page(paper: "a4", margin: (x: 2cm, y: 1.8cm))
#set text(font: "Inter", size: 10pt, fill: black, lang: "en")
#set par(leading: 0.6em, justify: false)
#set list(indent: 0.6em, body-indent: 0.6em, spacing: 0.6em)
#show link: it => it

#let section(title) = {
  v(1.1em)
  text(weight: "medium", size: 10.5pt, upper(title))
  v(-0.55em)
  line(length: 100%, stroke: 0.5pt + black)
  v(0.25em)
}

#let entry(left, right, sub: none) = {
  text(weight: "medium", left)
  h(1fr)
  right
  if sub != none {
    linebreak()
    sub
  }
  v(0.1em)
}

#align(center)[
  #text(size: 20pt, weight: "medium")[Gean Mapesos]
  #v(-0.2em)
  #link("mailto:mapesosgean@gmail.com")[mapesosgean\@gmail.com] | #link("https://geanmapesos.dev")[geanmapesos.dev] | #link("https://github.com/gemapesos")[github.com/gemapesos] \
  #link("https://www.linkedin.com/in/gean-mapesos-45514228b/")[linkedin.com/in/gean-mapesos-45514228b]
]

#v(0.6em)
Computer Science student and automation builder making practical tools that save people time. Open to software engineering and automation internships (remote or hybrid).

#section("Education")
#entry(
  "FEU Institute of Technology",
  "2023–2027",
  sub: "BS Computer Science, Specialization in Software Engineering",
)

#section("Experience")
#entry(
  "Solutions4Ecommerce",
  "Mar 2023–Present",
  sub: "Account Maintenance Specialist | Part-time, Remote",
)
- Maintain client ecommerce accounts remotely alongside full-time Computer Science coursework.
- Identified repetitive browser workflows and built internal JavaScript web automation tools to streamline daily tasks for the team.

#section("Projects")
#entry(
  [Personal Portfolio | #text(weight: "regular")[#link("https://geanmapesos.dev")[geanmapesos.dev] · #link("https://github.com/gemapesos/portfolio")[github.com/gemapesos/portfolio]]],
  "2026",
)
- Built and deployed a responsive static site on Vercel with Next.js, React, TypeScript, and Tailwind CSS.
- Structured all site content in one typed data module so entries update cleanly without modifying layout code.
- Generated build-time Open Graph cards, semantic JSON-LD metadata, and automatic light/dark theming.

#section("Certifications")
#entry("PMI Project Management Ready®", "Mar 2026", sub: "Project Management Institute | Credential ID: waSwy-H92N")
#v(0.3em)
#entry("CCNA: Introduction to Networks", "Aug 2025", sub: "Cisco Networking Academy, through FEU Institute of Technology")
#v(0.3em)
#entry("IT Specialist - Python", "Jul 2025", sub: "Certiport, a Pearson VUE business | Credential ID: JdCD-4wb2")

#section("Skills")
#text(weight: "medium")[Languages:] JavaScript, TypeScript, Python \
#text(weight: "medium")[Web:] HTML/CSS \
#text(weight: "medium")[Tools:] Git, GitHub, Vercel \
#text(weight: "medium")[Exploring:] n8n, AI workflows & prompting
