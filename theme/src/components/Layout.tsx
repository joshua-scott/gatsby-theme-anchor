import React, { ReactNode } from 'react';
import { Layout as StyledLayout, Main, Container } from 'theme-ui';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { createGlobalStyle } from 'styled-components';

import Hero from './Hero';
import Footer from './Footer';
import Header from './Header';
import MockWrapper from './MockWrapper';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`;

type Props = {
  children: ReactNode;
  heroContent?: ReactNode;
  mocked?: boolean;
};

const Layout = ({ children, heroContent, mocked }: Props) => {
  return (
    <MockWrapper mocked={mocked}>
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <GlobalStyle />
          <Hero
            header={<Header transparentHeader={!!heroContent} />}
            content={heroContent}
          />
          <Main>
            <Container>{children}</Container>
          </Main>
          <Footer />
        </StyledLayout>
      </ThemeProvider>
    </MockWrapper>
  );
};

export default Layout;
