import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import MockWrapper from './MockWrapper';
import Container from './Container';

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
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <MockWrapper mocked={mocked}>
            {hero || <Header />}
            <Main>
              <Container py={[4, 5]}>{children}</Container>
            </Main>
            <Footer />
          </MockWrapper>
        </AppWrapper>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
