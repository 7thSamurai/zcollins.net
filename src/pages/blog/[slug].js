import { serializeMdx, getBlogPostSlugs, getBlogPostFromSlug } from "@/src/utils/mdx";
import { Article } from '@/src/components';

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

export default function BlogPost(props) {
    return (
      <Article {...props}/>
    );
}