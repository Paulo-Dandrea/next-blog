import * as React from 'react';
import { AllPosts } from '../../components/layout/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs1',
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: '2022-09-04'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: '2022-09-04'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: '2022-09-04'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: '2022-09-04'
  }
]
export interface IAllPostsPageProps {
}


function AllPostsPage (props: IAllPostsPageProps) {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  );
}

export default AllPostsPage