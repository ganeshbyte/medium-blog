export interface User {}

export interface IBlog {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  author: {
    name: string;
  };
}
