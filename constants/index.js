import { 
    AiFillGithub, 
    AiFillTwitterCircle, 
    AiFillLinkedin,
    AiOutlineMail,
} from 'react-icons/ai'

import {
    SlPhone, 
    SlSocialTwitter,
} from 'react-icons/sl'

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