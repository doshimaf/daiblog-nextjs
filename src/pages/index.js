import fs from "fs";

import Link from "next/link";

import Layout from "../../components/Layout";
import { readContentFiles } from "../../lib/content-loader";

export default function Home(props) {
  const { posts, hasArchive } = props
  return (
    <Layout title="">
      {posts.map((post) => <div
        key={post.slug}
        className="post-list"
      >
        <p className="post-list__date">{post.published}</p>
        <h2 className="post-list__title"><Link href="/posts/[id]" as={`/posts/${post.slug}`}><a>{post.title}</a></Link></h2>
      </div>)}

      {hasArchive ? (
        <div className="home-archive">
          <Link href="/archive/[page]" as="/archive/1"><a>アーカイブ</a></Link>
        </div>
      ) : ``}
    </Layout>
  )
}

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const MAX_COUNT = 5
  const posts = await readContentFiles({ fs })
  const hasArchive = posts.length > MAX_COUNT

  return {
    props: {
      posts: posts.slice(0, MAX_COUNT),
      hasArchive,
    }
  }
}