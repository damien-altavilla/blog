import avatar from '../assets/images/avatar.jpg';
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
            text: 'LinkedIn',
            href: ''https://www.linkedin.com/in/damien-altavilla'
        },
        {
            text: 'Credly',
            href: 'https://www.credly.com/users/damien-altavilla'
        }
    ],
    hero: {
        title: 'Hi, I\'m Damien 👋',
        text: "I'm an **IT professional** based in Poland, working across Microsoft 365, Azure and networking in global banking environments.\nCertified in **CCNA**, **Azure Administrator (AZ-104)**, and **Microsoft 365 Administrator (MS-102)**, I document the labs, certification prep, and technical problem-solving that shape my day-to-day work.\n\nThis site is where I share hands-on projects, what I learn along the way, and what actually happens behind the tickets.\n\nWant to connect? Find me on [LinkedIn](https://www.linkedin.com/in/damien-altavilla/).",
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
