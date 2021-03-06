import * as React from "react";
import { TPost } from "../../types/types";
import { PostsGrid } from "../layout/posts/post-grid";
import classes from "./featured-posts.module.css";

export function FeaturedPosts({ posts }: { posts: TPost[] }) {
  return (
    <section className={classes.featuredPosts}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
