export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
}

export interface Project {
    title: string;
    description: string;
    imageSrc: string;
    tags: string[];
    link?: string;
    preview: string;
}
export interface Skill {
    name: string;
    skills: string[];
}

interface SocialLink {
    platform: string;
    url: string;
    icon: React.ReactElement<SVGElement>;
}
interface NavItem {
    label: string;
    href: string;
}
export interface Footer {
    name?: string;
    socialLinks: SocialLink[];
    navItems: NavItem[];
}
export interface Navbar {
    logo?: string | React.ReactNode;
    navItems: NavItem[];
    ctaButton: {
        label: string;
        href: string;
    };
}