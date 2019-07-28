export type PageLink = {
  path: string;
  name: string;
};

export type SocialLink = PageLink & {
  icon: string;
};

export type ImageLink = {
  src: string;
  alt: string;
};
