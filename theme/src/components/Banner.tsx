import React from 'react';
import { Styled } from 'theme-ui';
import { Podcast } from '../types/Anchor';

const { h1: H1, h2: H2 } = Styled as any;

type Props = Podcast;

const Banner = ({ title, description, image }: Props) => (
  <div>
    <H1>{title}</H1>
    <H2>{description}</H2>
    <img alt={image.title} src={image.url} style={{ width: '10em' }} />
  </div>
);

export default Banner;
