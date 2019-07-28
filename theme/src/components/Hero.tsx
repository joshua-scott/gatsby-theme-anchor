import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Podcast } from '../types/Podcast';
import LinkList from './LinkList';
import { Text, Image, Flex, Heading } from 'rebass';
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
    flexDirection={['column-reverse', 'row']}
    justifyContent="space-between"
    alignItems="center"
  >
    <div>
      <Heading fontSize={[5, 6]} color="invertText">
        {title}
      </Heading>
      <Heading fontSize={[4, 5]} color="invertText">
        {description}
      </Heading>
      <LinkList links={podcastLinks.map(addPlatformName)} />
    </div>
    <Image alt="Podcast logo" src={logo} width={250} m={2} />
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
