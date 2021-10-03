import * as React from "react";
import { PostItem } from "./post-item";
import classes from './posts-grid.module.css';


export interface IPostGridProps { posts: any[]; }

export function PostsGrid(props: IPostGridProps) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug}/>
      ))}
    </ul>
  );
}
