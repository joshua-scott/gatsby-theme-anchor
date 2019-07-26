export type PageLink = {
  path: string;
  name: string;
};

export type SocialLink = PageLink & {
  icon: string;
};
