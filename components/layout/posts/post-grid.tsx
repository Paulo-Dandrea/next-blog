import * as React from "react";
import { PostItem } from "./post-item";
import classes from './posts-grid.module.css';
import { TPost } from "../../../types/types";



export function PostsGrid({ posts }: {posts: TPost[]}) {

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug}/>
      ))}
    </ul>
  );
}
