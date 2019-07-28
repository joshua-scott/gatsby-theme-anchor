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

  a { 
    color: inherit;
  }
`;

const Main = styled.main`
  box-sizing: border-box;
  min-width: 0;
  flex: 1 1 auto;
  margin: 0 auto;
  max-width: ${props =>
    props.theme.breakpoints[props.theme.breakpoints.length - 1]};
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
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  line-height: 1.45;
`;

type Props = {
  children: ReactNode;
  hero?: ReactNode;
  mocked?: boolean;
};

const Layout = ({ children, hero, mocked }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MockWrapper mocked={mocked}>
        <AppWrapper>
          <GlobalStyle />
          {hero || <Header />}
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
