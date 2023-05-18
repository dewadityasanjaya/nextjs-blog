import Link from 'next/Link';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
                <Script
                    src="https://example.com/samplescript.js"
                    strategy="lazyOnload"
                    onLoad={() => { console.log('script loaded correctly, window.FB has been populated') }}
                />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}