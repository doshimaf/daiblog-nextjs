import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import { Date } from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <ul>
          {allPostsData.map(({ id, publish, title }) => (
            <li className='mb-8' key={id}>
              <p className='mb-1 text-xs text-gray-600'>
                <Date dateString={publish} />
              </p>
              <Link href={`/posts/${id}`}>
                <a><span className='block text-lg sm:text-xl leading-snug'>{title}</span></a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}