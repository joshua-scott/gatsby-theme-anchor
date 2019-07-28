import React from 'react';
import { normalizeName } from '../utils/string';
import { detectPodcastPlatform } from '../utils/link';
import { Image } from 'rebass';

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
  return (
    <Image width={150} src={`img/badges/badge-${platform}.png`} alt={alt} />
  );
};

export default PodcastBadge;
