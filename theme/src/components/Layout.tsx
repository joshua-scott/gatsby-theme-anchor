import React, { ReactNode } from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main, Container, Footer } from 'theme-ui';

import Header from './Header';

const globalStyles = css`
  body {
    margin: 0;
  }
`;

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <StyledLayout>
      <Global styles={globalStyles} />
      <Header />
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
