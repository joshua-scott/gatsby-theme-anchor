import React from 'react';
import { Styled } from 'theme-ui';
import { Episode } from '../types/Anchor';

const { h1: H1 } = Styled as any;

type Props = Episode;

const EpisodeCard = ({ title }: Props) => {
  return (
    <div>
      <H1>{title}</H1>
    </div>
  );
};

export default EpisodeCard;
