import React from 'react';
import { Styled, Flex } from 'theme-ui';
import { Podcast } from '../types/Anchor';

type Props = Podcast;

const Banner = ({ title, description, image, link }: Props) => (
  <Flex
    style={{
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <div>
      <Styled.h1>{title}</Styled.h1>
      <Styled.h2>{description}</Styled.h2>
      <Styled.ul>
        <PlatformLink link={link} name="Anchor" />
        <PlatformLink link={link} name="Spotify" />
        <PlatformLink link={link} name="Pocket Cast" />
      </Styled.ul>
    </div>
    <img alt={image.title} src={image.url} style={{ width: '10em' }} />
  </Flex>
);

const PlatformLink = ({ name, link }) => (
  <Styled.li style={{ display: 'inline-block', margin: '0 10px' }}>
    <Styled.a href={link}>Link to {name}</Styled.a>
  </Styled.li>
);

export default Banner;
