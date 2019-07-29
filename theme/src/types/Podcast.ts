export type Podcast = {
  title: string;
  podcastLinks: string[];
  socialLinks?: string[];
  description: string;
  logo: string;
};

export type Episode = {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  url: string;
  duration?: number;
  link?: string;
  cover?: string;
};
