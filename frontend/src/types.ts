export interface User {}

export interface IBlog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}
