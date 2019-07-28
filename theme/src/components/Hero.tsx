import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Podcast } from '../types/Podcast';
import LinkList from './LinkList';
import { Text } from 'rebass';
import { detectPodcastPlatform } from '../utils/link';
import PodcastBadge from './PodcastBagde';
import Container from './Container';

const HeroContainer = styled.div<{ background: string }>`
  background-image: url(${props => props.background});
  background-color: ${props => props.theme.colors.primary};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const addPlatformName = (link: string) => ({
  path: link,
  name: <PodcastBadge link={link} />,
});

const Banner = ({ title, description, logo, podcastLinks = [] }: Podcast) => (
  <StyledBanner>
    <div>
      <Text fontSize={[5, 6]} fontWeight="bold" color="invertText">
        {title}
      </Text>
      <Text fontSize={[4, 5]} fontWeight="bold" color="invertText">
        {description}
      </Text>
      <LinkList links={podcastLinks.map(addPlatformName)} />
    </div>
    <img alt="Podcast logo" src={logo} style={{ width: '10em' }} />
  </StyledBanner>
);

type Props = {
  podcast: Podcast;
  cover: string;
};

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
