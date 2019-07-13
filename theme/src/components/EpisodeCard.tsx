import React from 'react';
import { Styled } from 'theme-ui';
import { Episode } from '../types/Anchor';

type Props = Episode;

const EpisodeCard = ({ title }: Props) => {
  return (
    <div>
      <Styled.H1>{title}</Styled.H1>
    </div>
  );
};

export default EpisodeCard;
