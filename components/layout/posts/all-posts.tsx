import * as React from 'react';
import { Post } from '../../home-page/featured-posts';
import classes from './all-posts.module.css'
import { PostsGrid } from './post-grid';

export interface AllPosts {
    posts: Post[]
}

export function AllPosts ({posts}: AllPosts) {
  return (
    <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts} />
    </section>
  );
}
