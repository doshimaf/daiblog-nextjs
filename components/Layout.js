import Head from "next/head"
import Link from "next/link"

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "daiblog"

  return (
    <div className="wrapper">
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <p className="header__logo">
          <Link href="/">
            <a><img src="/images/daiblog-logo.png" alt="daiblog" /></a>
          </Link>
        </p>
      </header>

      <main className="main">
        {title ? <h1 className="page-title">{title}</h1> : ``}
        <div className="post-list">
          {children}
        </div>
      </main>

      <footer className="footer">
        &copy; {siteTitle}
      </footer>
    </div>
  )
}

export default Layout