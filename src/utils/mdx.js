import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter';
import readingTime from 'reading-time'

const blogPath = path.join(process.cwd(), 'data/blog')
const projectsPath = path.join(process.cwd(), 'data/projects')

/* Converts raw markdown content */
export async function serializeMdx(content) {
    return serialize(
        content, 
        {
            mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [],
            },
        },
    );
}

/* Gets a list of all the slugs in an article directory */
async function getSlugs(articlesPath) {
    /* Get a list of all the file paths */
    const paths = sync(`${articlesPath}/*.mdx`);

    /* Convert each path into a slug */
    return paths.map((path) => {
        const fileName = path.split('/').pop();
        const slug = fileName.split('.')[0];

        return slug;
    });
}

/* Gets an article's contents and metadata from it's slug */
async function getArticleFromSlug(slug, articlesPath) {
    const fullPath = path.join(articlesPath, `${slug}.mdx`);
    const source = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(source);

    return {
        content,
        meta: {
            slug,
            title: data.title,
            about: data.about,
            publishedAt: data.publishedAt,
            readingTime: readingTime(source).text,
            ...data,
        },
    };
}

/* Gets a list of all the article's content and metadata in a directory */
async function getAllArticles(articlesPath) {
    const articles = fs.readdirSync(articlesPath);
    
    /* Get all the articles */
    const allArticles = articles.reduce((allArticles, slug) => {
        const fullPath = path.join(articlesPath, slug);
        const source = fs.readFileSync(fullPath, 'utf-8');
        const { data, content } = matter(source);

        return [
            {
                content,
                meta: {
                    slug: slug.replace(/\.mdx$/, ''),
                    title: data.title,
                    about: data.about,
                    publishedAt: data.publishedAt,
                    readingTime: readingTime(source).text,
                    ...data,
                }
            },
            ...allArticles,
        ];
    }, []);

    /* Sort them by their publishing date */
    return allArticles.sort((a,b) => (
        new Date(b.meta.publishedAt) - new Date(a.meta.publishedAt)
    ));
}

export async function getBlogPostSlugs() { return getSlugs(blogPath); }
export async function getProjectSlugs () { return getSlugs(projectsPath); }

export async function getBlogPostFromSlug(slug) { return getArticleFromSlug(slug, blogPath); }
export async function getProjectFromSlug (slug) { return getArticleFromSlug(slug, projectsPath); }

export async function getAllBlogPosts() { return getAllArticles(blogPath); }
export async function getAllProjects () { return getAllArticles(projectsPath); }

export async function getLatestBlogPosts(limit = 3) { return getAllBlogPosts().slice(0, limit); }
export async function getLatestProjects (limit = 3) { return getAllProjects().slice(0, limit); }
