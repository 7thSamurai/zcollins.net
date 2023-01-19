import { 
    AiFillGithub, 
    AiFillTwitterCircle, 
    AiFillLinkedin,
    AiOutlineMail,
    AiOutlineDesktop,
    AiOutlineCloudServer,
    AiOutlineDatabase,
} from 'react-icons/ai'

import { SlPhone, SlSocialTwitter, } from 'react-icons/sl'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { FiDatabase } from 'react-icons/fi'

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
        desc: 'I will develop professional and multi-platform custom PC applications to increase productivity and help automate your business.',
        icon: <AiOutlineDesktop/>,
    },
    {
        name: 'Backend Development',
        desc: 'I offer development services to help you create new backend systems from the ground up, or add onto and enhance your existing infrastructure.',
        icon: <AiOutlineDatabase/>,
    },
    {
        name: 'Database Design',
        desc: 'I will design and implement databases for your business, whether you\'re starting from scratch or migrating an existing database or spreadsheet.',
        icon: <FiDatabase/>,
    },
    {
        name: 'Data Analysis',
        desc: 'I provide data analysis services to help you make informed decisions through the collection, cleaning, and study of large datasets.',
        icon: <IoAnalyticsOutline/>,
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
        text: '(+1) 222-333-4444',
        info: 'tel:+1-222-333-444',
        icon: <SlPhone/>,
    },
    {
        name: 'Twitter',
        text: '@zcollinsdev',
        info: 'https://twitter.com/zcollinsdev',
        icon: <SlSocialTwitter/>,
    },
];