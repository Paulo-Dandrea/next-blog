import * as React from 'react';
import classes from './featured-posts.module.css';

export interface IFeaturedPostsProps {
}

export function FeaturedPosts (props: IFeaturedPostsProps) {
  return (
    <section className={classes.featuredPosts}>
      <h2>Featured Posts</h2>
    </section>
  );
}
