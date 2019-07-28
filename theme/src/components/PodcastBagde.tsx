import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 150px;
`;

type Props = {
  platform: string;
};

const PodcastBadge = ({ platform }: Props) => {
  const src = require(`../icons/badge-${platform}.png`);
  const platformName = platform
    .split('-')
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');

  const alt = `Listen on ${platformName}`;
  return <StyledImg src={src} alt={alt} />;
};

export default PodcastBadge;
