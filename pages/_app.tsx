import Head from 'next/head';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/breakpoints';
import GlobalStyles from 'styles/global-styles';
import { QueryClientProvider, QueryClient } from 'react-query';

export const queryClient = new QueryClient();

import '@stream-io/stream-chat-css/dist/css/index.css';
import 'styles/app.css';

const Root = styled.div`
  margin: 0 auto;
  max-width: 876px;
`;

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
            <Root>
              <Component {...pageProps} />
            </Root>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
