import * as React from 'react';
import classes from './post-item.module.css';

export interface IFeaturedPostsProps {
}

export function PostItem (props: IFeaturedPostsProps) {
  return (
    <section className={classes.featuredPosts}>
      <h2>Featured Posts</h2>
    </section>
  );
}
