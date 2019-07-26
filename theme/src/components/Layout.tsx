import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Hero from './Hero';
import Footer from './Footer';
import Header from './Header';
import MockWrapper from './MockWrapper';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    margin: 0;
  }
`;

const Main = styled.div`
  box-sizing: border-box;
  min-width: 0;
  flex: 1 1 auto;
  margin: 0 auto;
  max-width: 650px;
  width: 90vw;
`;

const Container = styled.div`
  padding: 0;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const AppWrapper = styled.div`
  box-sizing: border-box;
  min-width: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #232129;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  line-height: 1.45;
`;

type Props = {
  children: ReactNode;
  heroContent?: ReactNode;
  mocked?: boolean;
};

const Layout = ({ children, heroContent, mocked }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MockWrapper mocked={mocked}>
        <AppWrapper>
          <GlobalStyle />
          <Hero
            header={<Header transparentHeader={!!heroContent} />}
            content={heroContent}
          />
          <Main>
            <Container>{children}</Container>
          </Main>
          <Footer />
        </AppWrapper>
      </MockWrapper>
    </ThemeProvider>
  );
};

export default Layout;
