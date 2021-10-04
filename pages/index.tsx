import type { NextPage } from "next";
import { Fragment } from "react";
import { FeaturedPosts } from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import { TPost } from "../types/types";

interface Props {
  posts: TPost[];
}

const Home: NextPage<Props> = ({posts}) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  return {
    props: { posts: getFeaturedPosts() }, 
  };
}

export default Home;
