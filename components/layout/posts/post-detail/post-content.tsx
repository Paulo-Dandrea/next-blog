import * as React from "react";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { PostHeader } from "./post-header";

export interface PostContentProps {
  posts: Post[];
}

const DUMMY_POST = {
  slug: "getting-started-with-nextjs4",
  title: "Getting Started with Next.js",
  image: "getting-started-nextjs.png",
  date: "2022-09-04",
  content: "# this is a markdown",
};

export function PostContent({ posts }: PostContentProps) {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
