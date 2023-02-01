import { serializeMdx, getProjectSlugs, getProjectFromSlug } from "@/src/utils/mdx";
import { Article } from '@/src/components';

export async function getStaticPaths() {
    const paths = (await getProjectSlugs()).map((slug) => ({
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
    const { content, meta } = await getProjectFromSlug(params.slug);
    const source = await serializeMdx(content);

    return {
        props: {
            source,
            meta,
        },
    };
}

export default function Project(props) {
    return (
      <Article {...props}/>
    );
}