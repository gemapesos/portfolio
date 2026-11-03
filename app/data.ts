// All of the site's copy lives here. Edit this file to update the page.

import type { StaticImageData } from "next/image";
import ccnaCertificate from "@/assets/certificates/ccna-introduction-to-networks.webp";
import pmiCertificate from "@/assets/certificates/pmi-project-management-ready.webp";
import feuTechLogo from "@/assets/logos/feu-tech.png";
import s4eLogo from "@/assets/logos/s4e.png";

export const site = {
  name: "Gean Mapesos",
  description:
    "Software Engineering student at FEU Institute of Technology and Account Maintenance Specialist at Solutions4Ecommerce.",
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
    lead: "Aspiring automation builder",
    rest: "who likes making useful tools that save people time.",
  },
  bio: [
    "I'm studying Computer Science with a specialization in Software Engineering at FEU Institute of Technology. Alongside my studies, I work part-time and remotely as an Account Maintenance Specialist at Solutions4Ecommerce (S4E), where I've built JavaScript web automation tools for my team.",
    "Right now I'm learning Python, AI prompting, and workflow tools like n8n to become a better automation builder. I'm open to internship opportunities.",
  ],
};

type Job = {
  company: string;
  role: string;
  period: string;
  summary?: string;
  logo?: StaticImageData;
};

export const experience: Job[] = [
  {
    company: "Solutions4Ecommerce",
    role: "Account Maintenance Specialist",
    period: "Mar 2023–Present",
    summary: "Part-time · Remote",
    logo: s4eLogo,
  },
];

type Project = {
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Web automation tools",
    description:
      "Internal tools that automate everyday web tasks for my team at Solutions4Ecommerce. Built with JavaScript.",
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

type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  verifyUrl?: string;
  note?: string;
  // The certificate itself, shown large and linked at full size.
  image?: StaticImageData;
};

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
];

export const links = [
  { label: "GitHub", handle: "@gemapesos", href: site.github },
  { label: "LinkedIn", handle: "Gean Mapesos", href: site.linkedin },
  { label: "Email", handle: site.email, href: `mailto:${site.email}` },
];
