import * as React from 'react';
import { AllPosts } from '../../components/layout/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

export interface IAllPostsPageProps {
}


function AllPostsPage ({posts}) {
  return (
    <AllPosts posts={posts} />
  );
}

export function getStaticProps(context) {
  return {
    props: { posts: getAllPosts() }, // will be passed to the page component as props
  };
}

export default AllPostsPage