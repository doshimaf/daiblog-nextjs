import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { Date, UpDate } from '../../components/date';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | daiblog</title>
      </Head>
      <article className='max-w-none'>
        <h1 className='mb-2 text-xl lg:text-2xl font-bold'>{postData.title}</h1>
        <div className='mb-12 sm:text-right'>
          <span className='text-sm text-gray-600'>投稿日 : <Date dateString={postData.publish} /></span><br />
          <span className='text-sm text-gray-600'>更新日 : <UpDate dateString={postData.update} /></span>
        </div>
        <div className='prose prose-sm lg:prose-base max-w-none' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}