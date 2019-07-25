import React, { ReactNode, ReactComponentElement } from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main, Container } from 'theme-ui';
import Hero from './Hero';
import Footer from './Footer';
import Header, { HeaderTemplate } from './Header';

const globalStyles = css`
  body {
    margin: 0;
  }
`;

type Props = {
  children: ReactNode;
  heroContent?: ReactNode;
};

export const LayoutMocked = ({ children, heroContent }: Props) => {
  const header = (
    <HeaderTemplate
      transparentHeader={!!heroContent}
      title="CMS Preview"
      pages={[]}
    />
  );
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
