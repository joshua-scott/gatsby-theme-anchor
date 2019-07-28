import { ReactNode } from 'react';

export type PageLink = {
  path: string;
  name: string | ReactNode;
};

export type SocialLink = PageLink & {
  icon: string;
};

export type ImageLink = {
  src: string;
  alt: string;
};
