import React from 'react';
import { Styled } from 'theme-ui';
import { Episode } from '../types/Anchor';

type Props = Episode;

const EpisodeCard = ({ title, link, isoDate, itunes, enclosure }: Props) => {
  console.log(enclosure);
  return (
    <div>
      <Styled.h1>{title}</Styled.h1>
      <Styled.a href={link}>Link to the episode</Styled.a>
    </div>
  );
};

export default EpisodeCard;
