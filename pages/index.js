import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/Link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is me!</p>
        <p>
          (Check this{' '}
          <Link href="./posts/first-post">First Post!</Link>.)
        </p>
      </section>
    </Layout>
  );
}