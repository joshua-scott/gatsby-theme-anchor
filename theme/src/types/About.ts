export type Author = {
  name: string;
  description: string;
  picture: string;
};

export type About = {
  content: string;
  authors: Author[];
};
