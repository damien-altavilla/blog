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
        alt: 'Damien Altavilla | IT Support & Cloud Administration'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Articles',
            href: '/blog'
        }
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
            href: 'https://www.linkedin.com/in/damien-altavilla'
        },
        {
            text: 'Credly',
            href: 'https://www.credly.com/users/damien-altavilla'
        }
    ],
    hero: {
        text: "Welcome to my blog! I'm Damien, a French IT professional based in Wrocław, Poland, passionate about cloud and networking.\n\nHere you'll find my personal projects and articles about Azure, Microsoft 365, networking, DNS and certification prep — real, hands-on stuff, including the mistakes I made along the way and how I fixed them.\n\nCurious about my background? Head over to the [About](/about) page.",
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
