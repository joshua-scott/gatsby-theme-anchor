import React, { ReactNode, ReactComponentElement } from 'react';
import { Layout as StyledLayout, Main, Container } from 'theme-ui';
import Hero from './Hero';
import Footer, { FooterTemplate } from './Footer';
import Header, { HeaderTemplate } from './Header';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { footerPropsMock } from '../mocks/Components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`;

const MockedHeader = props => (
  <HeaderTemplate {...props} title="CMS Preview" pages={[]} />
);

const MockedFooter = props => (
  <FooterTemplate {...props} {...footerPropsMock} />
);

type Props = {
  children: ReactNode;
  heroContent?: ReactNode;
  mocked?: boolean;
};

const Layout = ({ children, heroContent, mocked }: Props) => {
  const HeaderComponent = mocked ? MockedHeader : Header;
  const FooterComponent = mocked ? MockedFooter : Footer;

  return (
    <StyledLayout>
      <GlobalStyle />
      <Hero
        header={<HeaderComponent transparentHeader={!!heroContent} />}
        content={heroContent}
      />
      <Main>
        <Container>{children}</Container>
      </Main>
      <FooterComponent />
    </StyledLayout>
  );
};

export default Layout;
