import { 
    AiFillGithub, 
    AiFillTwitterCircle, 
    AiFillLinkedin,
    AiOutlineMail,
    AiOutlineDesktop,
    AiOutlineDatabase,
    AiOutlineCode,
} from 'react-icons/ai'

import {
    SiC,
    SiCplusplus,
    SiPython,
    SiQt,
    SiFlask,
    SiPandas,
    SiAmazonaws,
    SiGit,
    SiGithub,
    SiLinux,
    SiCmake,
} from 'react-icons/si'

import { SlPhone, SlSocialTwitter, } from 'react-icons/sl'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { FiDatabase } from 'react-icons/fi'
import { GrMysql} from 'react-icons/gr'
import { HiOutlineChip, HiOutlineCode } from 'react-icons/hi'

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'blog',
        title: 'Blog',
    },
    {
        id: 'resume',
        title: 'Resume',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
];

export const socialMedia = [
    {
        name: 'GitHub',
        icon: <AiFillGithub/>,
        link: 'https://github.com/7thSamurai',
    },
    {
        name: 'Twitter',
        icon: <AiFillTwitterCircle/>,
        link: 'https://twitter.com/zcollinsdev',
    },
    {
        name: 'LinkedIn',
        icon: <AiFillLinkedin/>,
        link: 'https://linkedin.com/in/zcol',
    },
];

export const services = [
    {
        name: 'Desktop Applications',
        desc: 'I develop professional and multi-platform custom PC applications to help automate and increase productivity for your business.',
        icon: <AiOutlineDesktop/>,
        link: '#',
    },
    {
        name: 'Backend Development',
        desc: 'I offer backend development services to help you create new systems from the ground up, or add onto and enhance your existing infrastructure.',
        icon: <AiOutlineDatabase/>,
        link: '#',
    },
    {
        name: 'Database Design',
        desc: 'I will design and implement databases for your business, whether you\'re starting from scratch or migrating an existing database or spreadsheet.',
        icon: <FiDatabase/>,
        link: '#',
    },
    {
        name: 'Data Analysis',
        desc: 'I provide data analysis services to help you make informed decisions through the collection, cleaning, and study of large datasets.',
        icon: <IoAnalyticsOutline/>,
        link: '#',
    },
]

export const skills = [
    {
        name: 'Languages',
        icon: <HiOutlineCode/>,
        skills: [
            {
                name: 'C',
                icon: <SiC/>,
            },
            {
                name: 'C++',
                icon: <SiCplusplus/>,
            },
            {
                name: 'Python',
                icon: <SiPython/>,
            },
            {
                name: 'MySQL',
                icon: <GrMysql/>,
            },
        ],
    },
    {
        name: 'Technologies',
        icon: <HiOutlineChip/>,
        skills: [
            {
                name: 'Qt',
                icon: <SiQt/>,
            },
            {
                name: 'Flask',
                icon: <SiFlask/>,
            },
            {
                name: 'Pandas',
                icon: <SiPandas/>,
            },
            {
                name: 'AWS',
                icon: <SiAmazonaws/>,
            },
        ],
    },
    {
        name: 'Tools',
        icon: <AiOutlineCode/>,
        skills: [
            {
                name: 'Git',
                icon: <SiGit/>,
            },
            {
                name: 'GitHub',
                icon: <SiGithub/>,
            },
            {
                name: 'Linux',
                icon: <SiLinux/>,
            },
            {
                name: 'CMake',
                icon: <SiCmake/>,
            },
        ],
    },
]

export const contactInfo = [
    {
        name: 'Email',
        text: 'contact@zcollins.net',
        info: 'mailto:contact@zcollins.net',
        icon: <AiOutlineMail/>,
    },
    {
        name: 'Phone',
        text: '+1 (440) 409-7867',
        info: 'tel:+1-440-409-7867',
        icon: <SlPhone/>,
    },
    {
        name: 'Twitter',
        text: '@zcollinsdev',
        info: 'https://twitter.com/zcollinsdev',
        icon: <SlSocialTwitter/>,
    },
];