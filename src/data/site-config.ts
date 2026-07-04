import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://damien-altavilla.com',
    avatar: {
        src: avatar,
        alt: 'Damien Altavilla'
    },
    title: 'Damien Altavilla',
    subtitle: 'IT Support & Cloud Administration | CCNA · Azure · M365',
    description: 'Homelab projects, certification journeys and field notes on Azure, Microsoft 365 and networking, by Damien Altavilla.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Damien Altavilla - IT Support & Cloud Administration'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Labs',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/REPLACE_ME'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/REPLACE_ME'
        },
        {
            text: 'Credly',
            href: 'https://www.credly.com/users/REPLACE_ME'
        }
    ],
    hero: {
        title: 'Hi, I\'m Damien 👋',
        text: "I'm an **IT professional** based in Poland, working across Microsoft 365, Azure and networking in global banking environments.\nCertified in **CCNA**, **Azure Administrator (AZ-104)**, and **Microsoft 365 Administrator (MS-102)**, I document the labs, certification prep, and technical problem-solving that shape my day-to-day work.\n\nThis site is where I share hands-on projects, what I learn along the way, and what actually happens behind the tickets.\n\nExplore my labs on [GitHub](https://github.com/REPLACE_ME) or connect with me on [LinkedIn](https://linkedin.com/in/REPLACE_ME).",
        image: {
            src: hero,
            alt: 'Damien Altavilla'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe',
        text: 'One update per new post. No spam.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
