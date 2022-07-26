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
      <article className='prose max-w-none'>
        <h1 className='text-3xl'>{postData.title}</h1>
        <div className='mb-12 text-right'>
          <span className='text-sm text-gray-600'>投稿日 : <Date dateString={postData.publish} /></span><br />
          <span className='text-sm text-gray-600'>更新日 : <UpDate dateString={postData.update} /></span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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