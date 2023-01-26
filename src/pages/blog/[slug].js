import { MDXRemote } from 'next-mdx-remote'
import { serializeMdx, getBlogPostSlugs, getBlogPostFromSlug } from "@/src/utils/mdx";
import { mdxComponents } from '@/src/components';

export async function getStaticPaths() {
    const paths = (await getBlogPostSlugs()).map((slug) => ({
        params: {
            slug,
        }    
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const { content, meta } = await getBlogPostFromSlug(params.slug);
    const source = await serializeMdx(content);

    return {
        props: {
            source,
            meta,
        },
    };
}

export default function BlogPost({source, meta}) {
    return (
      <div>
        <h1>{meta.title}</h1>
        <h2>{meta.about}</h2>
        <p>{meta.publishedAt}</p>
        <p>{meta.readingTime}</p>

        <MDXRemote {...source} components={mdxComponents}/>
      </div>
    );
}