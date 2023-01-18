import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

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