// All of the site's copy lives here. Edit this file to update the page.

import type { StaticImageData } from "next/image";
import ccnaCertificate from "@/assets/certificates/ccna-introduction-to-networks.webp";
import pmiCertificate from "@/assets/certificates/pmi-project-management-ready.webp";
import pythonCertificate from "@/assets/certificates/it-specialist-python.webp";
import feuTechLogo from "@/assets/logos/feu-tech.png";
import s4eLogo from "@/assets/logos/s4e.png";

export const site = {
  name: "Gean Mapesos",
  title: "Gean Mapesos — Software Engineering & Automation",
  url: "https://geanmapesos.dev",
  repo: "https://github.com/gemapesos/portfolio",
  resume: "/Gean-Mapesos-Resume.pdf",
  location: "Manila, PH (UTC+8)",
  description:
    "Software Engineering student at FEU Institute of Technology and Account Maintenance Specialist at Solutions4Ecommerce, building web and workflow automation tools.",
  email: "mapesosgean@gmail.com",
  github: "https://github.com/gemapesos",
  linkedin: "https://www.linkedin.com/in/gean-mapesos-45514228b/",
};

export const about = {
  roles: [
    "Software Engineering Student at FEU Tech",
    "Account Maintenance Specialist at S4E",
  ],
  tagline: {
    lead: "Automation builder",
    rest: "making practical tools that save people time.",
  },
  closing: {
    before:
      "I work with JavaScript and Python, and I'm currently expanding into workflow automation with n8n and AI-assisted tooling. I'm open to ",
    highlight: "software engineering and automation",
    after:
      " internships—remote, or hybrid/on-site in Manila, San Mateo (Rizal), and Angat (Bulacan).",
  },
};

export const connect = {
  note: "Open to software engineering and automation internships, or interesting projects—feel free to reach out.",
};

type Job = {
  company: string;
  role: string;
  period: string;
  arrangement?: string;
  highlights?: string[];
  logo?: StaticImageData;
};

export const experience: Job[] = [
  {
    company: "Solutions4Ecommerce",
    role: "Account Maintenance Specialist",
    period: "Mar 2023–Present",
    arrangement: "Part-time · Remote",
    highlights: [
      "Maintain client ecommerce accounts alongside full-time Computer Science coursework.",
      "Spotted repetitive data-entry bottlenecks and built internal bookmarklets used across the team—saving each teammate hours of manual work daily.",
    ],
    logo: s4eLogo,
  },
];

type Project = {
  title: string;
  meta?: string;
  href?: string;
  repo?: string;
  description: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "Web Automation Bookmarklets",
    meta: "Internal · S4E",
    description:
      "One-click browser tools that extract ecommerce page data from the DOM and format it into structured, clipboard-ready tables for daily account-maintenance workflows.",
    tags: ["JavaScript", "DOM Scraping", "Bookmarklets"],
  },
  {
    title: "Hometown Brew",
    meta: "Client · 2026",
    href: "https://hometownbrew.cafe",
    description:
      "Responsive website and digital menu for a local rooftop café in Rizal, with tabbed food and drink menus, a photo gallery lightbox, live open-hours status, and Google Maps/Waze directions.",
  },
];

type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["JavaScript", "Python"] },
  { label: "Web", items: ["HTML", "CSS", "DOM Scraping"] },
  { label: "Tools", items: ["Git", "GitHub", "Vercel"] },
  {
    label: "Exploring",
    items: ["n8n", "Bookmarklets", "AI-assisted development & workflows"],
  },
];

type School = {
  school: string;
  degree: string;
  period: string;
  logo?: StaticImageData;
};

export const education: School[] = [
  {
    school: "FEU Institute of Technology",
    degree: "BS Computer Science, Specialization in Software Engineering",
    period: "2023–2027",
    logo: feuTechLogo,
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  verifyUrl?: string;
  note?: string;
  // The certificate itself, shown as a preview with a lightbox on click.
  image?: StaticImageData;
};

// Ordered newest-first.
export const certifications: Certification[] = [
  {
    name: "PMI Project Management Ready®",
    issuer: "Project Management Institute",
    issued: "Mar 2026",
    expires: "Mar 2031",
    credentialId: "waSwy-H92N",
    verifyUrl: "https://verify.certiport.com",
    image: pmiCertificate,
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    issued: "Aug 2025",
    note: "Completed through FEU Institute of Technology",
    image: ccnaCertificate,
  },
  {
    name: "IT Specialist - Python",
    issuer: "Certiport, a Pearson VUE business",
    issued: "Jul 2025",
    expires: "Jul 2030",
    credentialId: "JdCD-4wb2",
    verifyUrl: "https://verify.certiport.com",
    image: pythonCertificate,
  },
];
