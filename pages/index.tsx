import type { NextPage } from 'next'
import { Fragment } from 'react'
import { FeaturedPosts } from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

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

const Home: NextPage = () => {
  return (
  <Fragment> 
    <Hero />
    <FeaturedPosts posts={DUMMY_POSTS} />
  </Fragment>
  )
}

export default Home
