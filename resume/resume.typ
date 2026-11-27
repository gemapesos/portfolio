// Gean Mapesos: one-page resume. Build from the repo root with:
// npm run build:resume

#set document(title: "Gean Mapesos - Resume", author: "Gean Mapesos")
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
  if sub != none {
    linebreak()
    sub
  }
  v(0.1em)
}

#align(center)[
  #text(size: 20pt, weight: "medium")[Gean Mapesos]
  #v(-0.2em)
  Metro Manila, PH | #link("mailto:mapesosgean@gmail.com")[mapesosgean\@gmail.com] | #link("https://geanmapesos.dev")[geanmapesos.dev] \
  #link("https://github.com/gemapesos")[github.com/gemapesos] | #link("https://www.linkedin.com/in/gean-mapesos-45514228b/")[linkedin.com/in/gean-mapesos-45514228b]
]

#v(0.6em)
Computer Science student and automation builder making practical tools that save people time. Open to software engineering and automation internships—remote, or hybrid/on-site in Manila, San Mateo (Rizal), and Angat (Bulacan).

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
- Spotted repetitive data-entry bottlenecks and built internal JavaScript bookmarklets that scrape page data, organize it into tables, and copy it to the clipboard—saving each teammate hours of manual work daily.

#section("Projects")
#entry(
  [Web Automation Bookmarklets | #text(weight: "regular")[Solutions4Ecommerce (Internal)]],
  "2023–Present",
)
- Built internal JavaScript bookmarklets for DOM data extraction, tabular formatting, and one-click clipboard export to speed up daily ecommerce account-maintenance workflows across the team.
#v(0.3em)
#entry(
  [Hometown Brew | #text(weight: "regular")[#link("https://hometownbrew.cafe")[hometownbrew.cafe]]],
  "2026",
)
- Shipped a responsive website and digital menu for a local café client, with tabbed menus, a photo gallery lightbox, live open-hours status, and Google Maps/Waze directions.
#v(0.3em)
#entry(
  [Personal Portfolio | #text(weight: "regular")[#link("https://geanmapesos.dev")[geanmapesos.dev] · #link("https://github.com/gemapesos/portfolio")[github.com/gemapesos/portfolio]]],
  "2026",
)
- Designed, reviewed, and deployed a minimal static portfolio on Vercel, keeping all content separated into a single data file for easy updates.

#section("Certifications")
#entry("PMI Project Management Ready®", "Mar 2026", sub: "Project Management Institute | Credential ID: waSwy-H92N")
#v(0.3em)
#entry("CCNA: Introduction to Networks", "Aug 2025", sub: "Cisco Networking Academy, through FEU Institute of Technology")
#v(0.3em)
#entry("IT Specialist - Python", "Jul 2025", sub: "Certiport, a Pearson VUE business | Credential ID: JdCD-4wb2")

#section("Skills")
#text(weight: "medium")[Languages:] JavaScript, Python \
#text(weight: "medium")[Web:] HTML/CSS, DOM Scraping \
#text(weight: "medium")[Tools:] Git, GitHub, Vercel \
#text(weight: "medium")[Exploring:] n8n, Bookmarklets, AI-assisted development & workflows
