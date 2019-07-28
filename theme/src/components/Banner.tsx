import React from 'react';
import { Podcast } from '../types/Podcast';
import styled from 'styled-components';
import LinkList from './LinkList';

type Props = Podcast & { cover?: string };

const StyledBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const addPlatformName = (link: string) => ({
  path: link,
  name: 'calculate!',
});

const Banner = ({ title, description, logo, podcastLinks = [] }: Props) => (
  <StyledBanner>
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <LinkList links={podcastLinks.map(addPlatformName)} />
    </div>
    <img alt="Podcast logo" src={logo} style={{ width: '10em' }} />
  </StyledBanner>
);

export default Banner;
