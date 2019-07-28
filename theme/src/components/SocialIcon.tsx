import React from 'react';
import styled from 'styled-components';
import { normalizeName } from '../utils/string';
import { detectSocialPlatform } from '../utils/link';

const StyledImg = styled.img`
  transition: color 0.5s;
  fill: red;
  color: red;

  &:hover {
    fill: ${props => props.theme.colors.primary};
  }
`;

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
      <StyledImg
        src={`img/social/social-${page}.svg`}
        width="30px"
        alt={normalizeName(page)}
      />
    </div>
  );
};

export default SocialIcon;
