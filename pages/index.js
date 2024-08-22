import React from "react";
import Hero from "../components/HomePage/hero";
import FeaturedPost from "../components/HomePage/featured";
import Head from "next/head";
import { getFeaturedPost } from "../lib/post-util";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>IdealFlare</title>
        <meta
          name="description"
          content=" IdeaFlare is a blo hangout where creativity meets inspiration. Ideal-Flare ignite
        sparks of innovation, exploring ideas that challenge the norm and fuel
        imagination. Whether you're seeking fresh perspectives, thought-provoking insights, or a burst of creative energy, IdeaFlare is your go-to destination for content that illuminates, inspires, and
        excites. Dive in and let your ideas soar!"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredPosts = await getFeaturedPost();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
}
