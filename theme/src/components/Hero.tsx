import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Banner from './Banner';
import { Podcast } from '../types/Podcast';

type Props = {
  podcast: Podcast;
  cover: string;
};

const Container = styled.div`
  padding: 0;
  padding-bottom: 10px;
  padding-top: 10px;
  max-width: 850px;
  margin: auto;
`;

const HeroContainer = styled.div<{ background: string }>`
  background-image: url(${props => props.background});
  background-color: ${props => props.theme.colors.invertText};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Hero = ({ podcast, cover }: Props) => {
  return (
    <HeroContainer background={cover}>
      <Header transparentHeader />
      <Container>
        <Banner {...podcast} />
      </Container>
    </HeroContainer>
  );
};

export default Hero;
