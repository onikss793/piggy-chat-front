import Head from 'next/head';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/breakpoints';
import GlobalStyles from 'styles/global-styles';
import { QueryClientProvider, QueryClient } from 'react-query';

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' />
        <title>piggy-chat</title>
      </Head>

      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
