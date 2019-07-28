import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Podcast } from '../types/Podcast';
import LinkList from './LinkList';
import { Text, Image, Flex, Heading, Box } from 'rebass';
import PodcastBadge from './PodcastBagde';
import Container from './Container';

const HeroContainer = styled.div<{ background: string }>`
  background-image: url(${props => props.background});
  background-color: ${props => props.theme.colors.primary};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${props => props.theme.space[4]}px;
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
  <Flex
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap-reverse"
  >
    <Box width={[1, 2 / 3, 3 / 4]}>
      <Heading fontSize={[5, 6]} color="invertText">
        {title}
      </Heading>
      <Heading fontSize={[4, 5]} color="invertText">
        {description}
      </Heading>
      <LinkList links={podcastLinks.map(addPlatformName)} />
    </Box>
    <Box width={[2 / 3, 1 / 3, 1 / 4]} m="auto">
      <Image alt="Podcast logo" src={logo} m={2} />
    </Box>
  </Flex>
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
