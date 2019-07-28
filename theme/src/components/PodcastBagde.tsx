import React from 'react';
import styled from 'styled-components';
import { normalizeName } from '../utils/string';
import { detectPodcastPlatform } from '../utils/link';

const StyledImg = styled.img`
  width: 125px;
`;

type Props = {
  link: string;
};

const PodcastBadge = ({ link }: Props) => {
  const platform = detectPodcastPlatform(link);
  if (platform === 'notRecognized') {
    console.warn(
      'Podcast platform not recognized, please check supported services',
    );
    return null;
  }
  const platformName = normalizeName(platform);

  const alt = `Listen on ${platformName}`;
  return <StyledImg src={`img/badges/badge-${platform}.png`} alt={alt} />;
};

export default PodcastBadge;
