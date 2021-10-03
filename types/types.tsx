export type Post = {
    slug: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
  }

export interface PostHeaderProps {
    title: string,
    image: string
}

export type PostContentProps = Post & { content: string };

