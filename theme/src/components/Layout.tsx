import React, { ReactNode, ReactComponentElement } from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main, Container } from 'theme-ui';
import Hero from './Hero';
import Header from './Header';
import Footer from './Footer';

const globalStyles = css`
  body {
    margin: 0;
  }
`;

type Props = {
  children: ReactNode;
  heroContent?: ReactNode;
};

const Layout = ({ children, heroContent }: Props) => {
  const header = <Header transparentHeader={!!heroContent} />;
  return (
    <StyledLayout>
      <Global styles={globalStyles} />
      {heroContent ? <Hero header={header} content={heroContent} /> : header}
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
