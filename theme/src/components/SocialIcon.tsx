import React from 'react';
import { normalizeName } from '../utils/string';
import { detectSocialPlatform } from '../utils/link';
import { Image } from 'rebass';

type Props = {
  link: string;
};

const SocialIcon = ({ link }: Props) => {
  const page = detectSocialPlatform(link);
  if (page === 'notRecognized') {
    console.warn(
      'Social link not recognized, please check supported websites.',
    );
    return null;
  }

  return (
    <div style={{ color: 'red' }}>
      <Image
        src={`img/social/social-${page}.svg`}
        width="30px"
        alt={normalizeName(page)}
      />
    </div>
  );
};

export default SocialIcon;
