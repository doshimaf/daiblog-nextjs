import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPostsByTag, getAllTags } from '../../lib/api';
import Layout from '../../components/layout';
import { Date } from '../../components/date';

export default function TagPosts({ posts, allTags }) {
  const router = useRouter()
  const tagName = allTags.find(tag => tag.toLowerCase() === router.query.tag)
  return (
    <Layout tags={allTags}>
      <Head>
        <title>{tagName} | daiblog</title>
      </Head>
      <h1>{tagName}</h1>
      <ul>
        {posts.length > 0 && posts.map((post) => (
          <li className='mb-8' key={post.date}>
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
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const posts = getPostsByTag(params.tag, [
    'title',
    'date',
    'update',
    'slug',
    'tags',
    'content',
  ])

  return {
    props: {
      post: {
        ...post,
        content,
      },
      allTags: getAllTags(),
    },
  }
}

export async function getStaticPaths() {
  const tags = getAllTags()
  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag.toLowerCase(),
        },
      }
    }),
    fallback: false,
  }
}