import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alura Viagens</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
    
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>

  );
}

export default MyApp
