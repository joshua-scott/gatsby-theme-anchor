import React, { ReactNode, ReactComponentElement } from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main, Container, Footer } from 'theme-ui';
import Hero from './Hero';
import Header from './Header';

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
      <Footer>
        <span>Is this footer really goes down?</span>
      </Footer>
    </StyledLayout>
  );
};

export default Layout;
