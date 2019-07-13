import React, { ReactNode } from 'react';
import { css, Global } from '@emotion/core';
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Footer,
} from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadata } from '../types/Gatsby';

const globalStyles = css`
  body {
    margin: 0;
  }
`;

type Props = {
  children: ReactNode;
};

type LayoutQuery = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

const Layout = ({ children }: Props) => {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Global styles={globalStyles} />
      <Header>
        <span>{data.site.siteMetadata.title}</span>
      </Header>
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
