import * as React from "react";
import { PostItem } from "./post-item";
import classes from './post-grid.module.css';


export interface IPostGridProps { posts: any[]; }

export function PostGrid(props: IPostGridProps) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}
