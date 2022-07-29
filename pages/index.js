import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { Date } from '../components/date';
import { getAllPosts, getAllTags } from '../lib/api';

export default function Home({ allPosts, allTags }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div>
          <ul>
          {allPosts.length > 0 && allPosts.map((post) => (
              <li className='mb-8' key={post.slug}>
                <p className='mb-1 text-xs text-gray-600'>
                  <Date dateString={post.date} />
                </p>
                <Link href={`/posts/${post.slug}`}>
                  <a className='hover:underline'>
                    <span className='block text-lg sm:text-xl leading-snug'>{post.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
  ]);

  return {
    props: {
      allPosts,
      allTags: getAllTags(),
    },
  };
};