export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillBar {
  label: string;
  pct: number;
  delay?: number;
}

export interface SkillCard {
  icon: string;
  name: string;
  desc: string;
  color: "cyan" | "purple" | "green";
  bars: SkillBar[];
}

export interface Tag {
  label: string;
  color?: "cyan" | "purple" | "green";
}

export interface MockBlock {
  style?: React.CSSProperties;
  isCyan?: boolean;
  colSpan2?: boolean;
}

export interface MockUI {
  barColor: string;
  barWidth: string;
  barShortColor: string;
  barShortVariant?: "short" | "xshort";
  windowBorderColor: string;
  blocks: MockBlock[];
}

export interface Project {
  num: string;
  name: string;
  desc: string;
  tags: Tag[];
  mock: MockUI;
  span: number;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
}

export interface ContactDetail {
  icon: string;
  text: string;
  href?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
