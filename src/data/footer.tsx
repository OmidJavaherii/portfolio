import React from "react";
import { Footer } from "@/types/type";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons";
export const footerData: Footer = {
    name: "Omid Javaheri",
    socialLinks: [
        {
            platform: "GitHub",
            url: "https://github.com/omidjavaherii",
            icon: <GitHubIcon />,
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/omidjavaheri",
            icon: <LinkedInIcon />,
        },
        {
            platform: "Instagram",
            url: "https://instagram.com/omid.javaheri_",
            icon: <InstagramIcon/>
        },
    ],
    navItems: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ],
}