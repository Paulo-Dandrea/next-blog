import * as React from 'react';
import { AllPosts } from '../../components/layout/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';
import { TPost } from '../../types/types';

function AllPostsPage<TPost> ({posts}: {posts: TPost[]}) {
  return (
    <>
    <Head>
      <title>All Posts</title>
      <meta name="description" content="All posts" />
    </Head>
    <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  return {
    props: { posts: getAllPosts() }, // will be passed to the page component as props
  };
}

export default AllPostsPage