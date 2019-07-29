export type AnchorEpisode = {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  url: string;
  itunes: {
    summary: string;
    image: string;
    duration: string;
    explicit: string;
  };
  enclosure: {
    url: string;
    length: string;
  };
};
