import siteJson from "@/data/site.json";
import projectsJson from "@/data/projects.json";
import skillsJson from "@/data/skills.json";
import experienceJson from "@/data/experience.json";

export interface SiteIdentity {
  name: string;
  wordmark: string;
  domain: string;
  title: string;
  location: string;
  statusLabel: string;
}

export interface SiteHero {
  eyebrow: string;
  headlineLight: string;
  headlineBold: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface SiteAbout {
  heading: string;
  paragraphs: string[];
  focus: string[];
}

export interface EducationItem {
  institution: string;
  program: string;
  startDate: string;
  endDate: string;
  gpa: string;
  note?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  cv: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  status: string;
  year?: string;
  role: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  problem?: string;
  solution?: string;
  contribution?: string;
  architecture?: string[];
  links: {
    demo: string;
    repository: string;
  };
  coverImage?: string;
  visual?: {
    type: string;
    alt: string;
  };
}

export interface SkillGroup {
  title: string;
  priority: number;
  technologies: string[];
}

export interface ExperienceItem {
  organization: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  url: string;
}

export const siteData = {
  identity: siteJson.identity as SiteIdentity,
  hero: siteJson.hero as SiteHero,
  navigation: siteJson.navigation as Array<{ label: string; href: string }>,
  about: siteJson.about as SiteAbout,
  education: siteJson.education as EducationItem[],
  contact: siteJson.contact as ContactInfo,
  footer: siteJson.footer as { copyrightName: string; closingLine: string },
};

export const projectsData = projectsJson.projects as ProjectItem[];
export const skillsData = (skillsJson.groups as SkillGroup[]).sort(
  (a, b) => a.priority - b.priority
);
export const experienceData = experienceJson.experiences as ExperienceItem[];
