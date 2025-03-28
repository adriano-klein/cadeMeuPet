import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from 'next/font/google';
import Head from "next/head";


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Cadê meu Pet</title>
        <meta name="language" content="pt-BR" />
      </Head>
      <SpeedInsights />
      <Analytics />
      <GlobalStyle />
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}