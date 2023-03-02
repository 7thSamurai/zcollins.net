import React from 'react'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'
import { Heading, mdxComponents } from '@/src/components';

const Article = ({source, meta}) => (
  <div>
    <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.about}/> 
    </Head>

    <article className='mx-auto 2xl:w-4/5'>
        <Heading.H1>{meta.title}</Heading.H1>
        <p className='my-4'>{meta.about}</p>

        {/* Reading time */}
        <p className='text-sm text-roman-silver'>
            {meta.readingTime} &middot; {meta.publishedAt}
        </p>

        <div className='mt-12'>
          <MDXRemote {...source} components={mdxComponents}/>
        </div>
    </article>
  </div>
);

export default Article;