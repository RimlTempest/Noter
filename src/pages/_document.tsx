import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang="ja-JP" dir="ltr">
                <Head>
                    {/* windows */}
                    <meta
                        name="msapplication-square70x70logo"
                        content="/logo.png"
                    />
                    <meta
                        name="msapplication-square150x150logo"
                        content="/logo.png"
                    />
                    <meta
                        name="msapplication-wide310x150logo"
                        content="/logo.png"
                    />
                    <meta
                        name="msapplication-square310x310logo"
                        content="/logo.png"
                    />
                    <meta name="msapplication-TileColor" content="#48bb78" />
                    {/* safari */}
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="#48bb78"
                    />
                    <meta name="apple-mobile-web-app-title" content="myapp" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/logo.png"
                    />
                    {/* 一般 */}
                    <meta name="application-name" content="myapp" />
                    <meta name="theme-color" content="#48bb78" />
                    <meta name="description" content="this is myapp" />
                    <link rel="icon" sizes="192x192" href="/logo.png" />
                    <link rel="icon" href="/favicon.png" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
