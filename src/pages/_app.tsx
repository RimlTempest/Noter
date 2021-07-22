import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GA_TRACKING_ID, pageview } from '../lib/gtag';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    useEffect(() => {
        // GA_TRACKING_ID が設定されていない場合は、処理終了
        if (!GA_TRACKING_ID) return;

        const handleRouteChange = (url: string) => {
            pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <ChakraProvider>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
