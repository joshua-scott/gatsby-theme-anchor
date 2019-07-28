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
  link: string;
  content: string;
  contentSnippet: string;
  publishedDate: string;
  enclosure: {
    url: string;
    type: string;
    length: string;
  };
  itunes: any;
};
