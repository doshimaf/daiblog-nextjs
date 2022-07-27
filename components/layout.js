import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../public/images/daiblog-logo.png'

export const siteTitle = 'daiblog';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content='/images/daiblog-ogp.png'
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className='flex justify-center pt-8 pb-12 sm:pb-20'>
        <p className=''>
          <Link href="/">
            <a className='block w-32 w-auto sm:w-48'>
              <Image
                src={logoImage}
                alt={siteTitle}
              />
            </a>
          </Link>
        </p>
      </header>
      <div className='container max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-y-8 sm:gap-8 lg:gap-20'>
        <main className='col-span-3'>{children}</main>
        <aside className='col-span-1'>
          <p className='pl-2 border-b border-gray-500'>Archive</p>
        </aside>
      </div>
      <footer className=' pt-20 pb-8'>
        <p className='text-sm text-center text-gray-500'>&copy; {siteTitle}</p>
      </footer>
    </>
  );
}