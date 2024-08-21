import React from "react";
import Hero from "../components/HomePage/hero";
import FeaturedPost from "../components/HomePage/featured";
import { getFeaturedPost } from "../lib/post-util";


const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_POST} />
    </>
  );
};

export default HomePage;

export function getStaticProps() {
  const featuredPost = getFeaturedPost()
}