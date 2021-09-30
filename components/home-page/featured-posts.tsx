import * as React from "react";
import { PostsGrid } from "../layout/posts/post-grid";
import classes from "./featured-posts.module.css";


export type Post = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
}
export interface IFeaturedPostsProps {
posts: Post[]
}[]


export function FeaturedPosts(props: IFeaturedPostsProps) {
  const { posts } = props;
  return (
    <section className={classes.featuredPosts}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
