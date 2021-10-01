import * as React from "react";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import { PostHeader } from "./post-header";
import { Post } from "../../../home-page/featured-posts";
import { getPostData } from "../../../../lib/posts-util";

export type PostContentProps = Post & { content: string };

export function PostContent({ post }: { post: PostContentProps }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
