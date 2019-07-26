import React from 'react';
import { Podcast } from '../types/Anchor';
import styled from 'styled-components';
import LinkList from './LinkList';

type Props = Podcast;

const StyledBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.colors.invertText};
`;

const LINKS = [
  {
    path: 'https://www.google.com/',
    name: 'Anchor',
  },
  {
    path: 'https://www.google.com/',
    name: 'Spotify',
  },
  {
    path: 'https://www.google.com/',
    name: 'Pocket Cast',
  },
];

const Banner = ({ title, description, image, link }: Props) => (
  <StyledBanner>
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <LinkList links={LINKS} />
    </div>
    <img alt={image.title} src={image.url} style={{ width: '10em' }} />
  </StyledBanner>
);

export default Banner;
