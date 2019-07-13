import React from 'react';
import { Styled } from 'theme-ui';
import { Podcast } from '../types/Anchor';

type Props = Podcast;

const Banner = ({ title, description, image }: Props) => (
  <div>
    <Styled.h1>{title}</Styled.h1>
    <Styled.h2>{description}</Styled.h2>
    <img alt={image.title} src={image.url} style={{ width: '10em' }} />
  </div>
);

export default Banner;
