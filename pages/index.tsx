import type { NextPage } from 'next'
import { Fragment } from 'react'
import { FeaturedPosts } from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

const Home: NextPage = () => {
  return (
  <Fragment> 
    <Hero />
    <FeaturedPosts />
  </Fragment>
  )
}

export default Home
