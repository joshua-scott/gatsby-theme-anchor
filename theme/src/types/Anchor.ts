export type Podcast = {
  title: string;
  link: string;
  description: string;
  image: {
    url: string;
    title: string;
  };
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
