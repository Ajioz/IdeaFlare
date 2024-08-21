import React from "react";
import Hero from "../components/HomePage/hero";
import FeaturedPost from "../components/HomePage/featured";
import { getFeaturedPost } from "../lib/post-util";

const HomePage = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const featuredPosts = await getFeaturedPost();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
