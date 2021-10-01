import type { NextPage } from "next";
import { Fragment } from "react";
import { FeaturedPosts } from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";


// We could use useEffect and FETCH data on mount
// But using getStaticPros and etc, we could pre-render a page with the data already

const Home: NextPage = ({posts}) => {
  console.log(posts)
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

// We could use getServerSideProps to always fetch all the featuredPosts when a request reaches the page.
// But, as our posts are mostly STATIC, there's no need to render all the time.


export function getStaticProps(context) {
  return {
    props: { posts: getFeaturedPosts() }, // will be passed to the page component as props
  };
}

export default Home;
