import { Container, MantineProvider, Global } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotificationsProvider } from '@mantine/notifications';
import NonSSRWrapper from '../components/architecture/NonSSRWrapper';
import Nav from '../components/nav/Nav';
import { FooterSocial } from '../components/footer/Footer';
import AppState from '../services/states';

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <NonSSRWrapper>
      <Head>
        <title>YOUR PROJECT - What-Feature</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppState.Provider>
        <QueryClientProvider client={queryClient}>
          <MantineProvider
            theme={{
              colorScheme: 'light',
              fontFamily: 'Verdana',
              Button: (theme, params) => ({
                // Shared button styles are applied to all buttons
                light: {
                  // subscribe to component params
                  color: theme.colors.violet,
                },
              }),
            }}
            withGlobalStyles
            withNormalizeCSS
          >
            <ModalsProvider>
              <NotificationsProvider>
                <Global
                  styles={(theme) => ({
                    body: {
                      ...theme.fn.fontStyles(),
                      backgroundColor: theme.colors.gray[0],
                      color: theme.black,
                      fontFamily: 'Fira Code',
                    },
                  })}
                />
                <Container size="xl">
                  <Nav />
                  <Component {...pageProps} />
                  <FooterSocial />
                </Container>
              </NotificationsProvider>
            </ModalsProvider>
          </MantineProvider>
        </QueryClientProvider>
      </AppState.Provider>
    </NonSSRWrapper>
  );
}

export default MyApp;
