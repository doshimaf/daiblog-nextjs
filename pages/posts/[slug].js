import Head from 'next/head';
import Layout from '../../components/layout';
import { Date, UpDate } from '../../components/date';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import { useEffect } from 'react';
import Prism from "prismjs";
import 'prismjs/themes/prism-tomorrow.css';

export default function Post({ post }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Layout>
      <Head>
        <title>{post.title} | daiblog</title>
      </Head>
      <article className='max-w-none'>
        <h1 className='mb-2 text-xl lg:text-2xl font-bold'>{post.title}</h1>
        <div className='mb-12 sm:text-right'>
          <span className='text-sm text-gray-600'>投稿日 : <Date dateString={post.date} /></span><br />
          <span className='text-sm text-gray-600'>更新日 : <UpDate dateString={post.update} /></span>
        </div>
        <div className='prose prose-sm lg:prose-base prose-code:before:content-none prose-code:after:content-none prose-code:text-xs lg:prose-code:text-xs prose-code:font-normal prose-code:tracking-normal max-w-none' dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'update',
    'slug',
    'tags',
    'content',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};