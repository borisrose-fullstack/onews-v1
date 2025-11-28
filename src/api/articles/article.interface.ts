interface Article {
  id: number;
  author: { fullName: string; photoUrl: string };
  tags: string[];
  publishedAt: string;
  title: string;
  content: string;
}

export default Article;
